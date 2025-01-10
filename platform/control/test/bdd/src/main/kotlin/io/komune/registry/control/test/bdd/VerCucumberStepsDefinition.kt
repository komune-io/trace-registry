package io.komune.registry.control.test.bdd

import org.springframework.beans.factory.annotation.Autowired

open class VerCucumberStepsDefinition: s2.bdd.CucumberStepsDefinition() {

    @Autowired
    override lateinit var context: VerTestContext
}
