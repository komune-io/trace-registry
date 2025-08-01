package io.komune.registry.test

import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.CucumberStepsDefinition

open class RgCucumberStepsDefinition: CucumberStepsDefinition() {

    @Autowired
    override lateinit var context: RgTestContext
}
