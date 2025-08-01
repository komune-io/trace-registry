package io.komune.registry.s2.commons.utils

import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope

abstract class DependencyAwareGraphInitializer<Node: Any, NodeReference: Any, NodeId: Any> {
    abstract fun getNodeReference(node: Node): NodeReference
    abstract fun getNodeDependencies(node: Node): List<NodeReference>
    abstract suspend fun tryLoadingExternalNode(nodeReference: NodeReference): NodeId?

    /**
     * Initializes a graph by processing a collection of nodes. This method ensures that each node is
     * initialized once all its dependencies have been resolved. Dependencies are managed through a mapping
     * of node references to their IDs, which is progressively built during the initialization process.
     * External dependencies are resolved by attempting to load nodes outside the given graph as needed.
     *
     * In cases where dependencies, including external ones, cannot be resolved, an IllegalArgumentException is
     * thrown, signaling unresolved dependencies. The successful completion of this method results in a
     * map associating each node reference with its corresponding initialized ID, confirming that all nodes,
     * including those with external dependencies, have been properly initialized.
     *
     * @param nodes An iterable collection of nodes to be initialized.
     * @param nodeInitializer A suspend function that initializes a node given the node and a map of its resolved dependencies.
     * @return A map linking each node reference to its corresponding initialized node ID.
     * @throws IllegalArgumentException If there are unknown dependencies that prevent the complete initialization of the graph.
     */
    suspend fun initialize(
        nodes: Iterable<Node>, nodeInitializer: suspend (Node, Map<NodeReference, NodeId>) -> NodeId
    ): Map<NodeReference, NodeId> {
        val context = Context(nodeInitializer)
        nodes.forEach { processNode(it, context) }
        val unknownDependencies = context.dependentNodes.keys

        coroutineScope {
            unknownDependencies.associateWith { nodeReference ->
                async { tryLoadingExternalNode(nodeReference) }
            }.forEach { (nodeReference, nodeIdDeferred) ->
                val nodeId = nodeIdDeferred.await()
                if (nodeId != null) {
                    context.nodeIds[nodeReference] = nodeId
                    context.dependentNodes.remove(nodeReference)?.forEach { processNode(it, context) }
                }
            }
        }

        if (context.dependentNodes.isNotEmpty()) {
            throw IllegalArgumentException("Unknown or cyclic dependencies: ${context.dependentNodes.keys}")
        }

        return context.nodeIds
    }

    /**
     * Performs a dry run of the initialization process, generating dummy IDs for nodes instead of initializing them.
     * This method is useful for verifying that a graph can be properly initialized before actually doing it,
     * removing the need for rollback processes.
     */
    suspend fun dryRun(nodes: Iterable<Node>, generateDummyId: (Node) -> NodeId) = initialize(nodes) { node, _ -> generateDummyId(node)  }

    protected open suspend fun processNode(node: Node, context: Context) {
        val nodeReference = getNodeReference(node)
        if (nodeReference in context.nodeIds) return

        val unknownDependency = getNodeDependencies(node).firstOrNull { it !in context.nodeIds }
        if (unknownDependency != null) {
            context.dependentNodes.getOrPut(unknownDependency) { mutableListOf() }.add(node)
        } else {
            val nodeId = context.initializeNode(node)
            context.nodeIds[nodeReference] = nodeId
            context.dependentNodes.remove(nodeReference)?.forEach { processNode(it, context) }
        }
    }

    protected open inner class Context(
        protected open val nodeInitializer: suspend (Node, Map<NodeReference, NodeId>) -> NodeId
    ) {
        open val dependentNodes = mutableMapOf<NodeReference, MutableList<Node>>()
        open val nodeIds = mutableMapOf<NodeReference, NodeId>()

        open suspend fun initializeNode(node: Node) = nodeInitializer(node, nodeIds)
    }
}
