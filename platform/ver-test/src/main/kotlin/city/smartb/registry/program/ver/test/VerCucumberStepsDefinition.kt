package city.smartb.registry.program.ver.test

import org.springframework.beans.factory.annotation.Autowired

open class VerCucumberStepsDefinition: s2.bdd.CucumberStepsDefinition() {

    @Autowired
    override lateinit var context: VerTestContext
}
