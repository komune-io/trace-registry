package city.smartb.registry.program.s2.task.api.entity

import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.s2.task.domain.automate.TaskS2State
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.TaskType
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

open class TaskEntity: WithS2Id<TaskId>, WithS2State<TaskS2State> {
    open lateinit var id: TaskId
    open var metaTaskId: TaskId? = null
    open lateinit var friendlyId: String
    open lateinit var type: TaskType
    open var lastModificationDate: Long = System.currentTimeMillis()
    open var priority: Long = 0
    open var supervisor: UserId? = null
    open lateinit var targetId: String
    open lateinit var contact: OrganizationId
    open var comment: String? = null
    open lateinit var status: TaskState
    open var properties: MutableMap<String, String> = mutableMapOf()

    override fun s2Id() = id
    override fun s2State() = TaskS2State.EXISTS
}
