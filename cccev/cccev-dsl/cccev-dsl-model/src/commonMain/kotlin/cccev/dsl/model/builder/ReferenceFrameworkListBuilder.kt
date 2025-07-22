package cccev.dsl.model.builder

import cccev.dsl.model.ReferenceFramework

fun referenceFramework(block: ReferenceFrameworkBuilder.() -> Unit): ReferenceFramework
    = ReferenceFrameworkBuilder().apply(block).build()
class ReferenceFrameworkBuilder {
    var identifier: String? = null
    var name: String = ""

    fun build(): ReferenceFramework = ReferenceFramework(identifier!!, name)
}

class ReferenceFrameworkListBuilder {

    private var referenceFramework = mutableListOf<ReferenceFramework>()

    operator fun ReferenceFramework.unaryPlus() {
        this@ReferenceFrameworkListBuilder.referenceFramework.add(this)
    }

    operator fun ReferenceFrameworkBuilder.unaryPlus() {
        this@ReferenceFrameworkListBuilder.referenceFramework.add(this.build())
    }

    fun build(): List<ReferenceFramework> = referenceFramework.toList()
}
