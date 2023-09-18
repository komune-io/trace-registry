package city.smartb.registry.ver.test

import org.springframework.beans.factory.annotation.Autowired

open class VerCucumberStepsDefinition: s2.bdd.CucumberStepsDefinition() {

    @Autowired
    override lateinit var context: city.smartb.registry.ver.test.VerTestContext
}
