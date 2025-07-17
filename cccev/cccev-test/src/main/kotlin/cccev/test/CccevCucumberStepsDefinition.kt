package cccev.test

import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.CucumberStepsDefinition

open class CccevCucumberStepsDefinition: CucumberStepsDefinition() {

    @Autowired
    override lateinit var context: CccevTestContext
}
