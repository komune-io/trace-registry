package city.smartb.registry.program.ver.test

import io.cucumber.spring.CucumberContextConfiguration
import org.springframework.boot.test.context.SpringBootTest

@CucumberContextConfiguration
@SpringBootTest(classes = [TestApplication::class])
class SpringTestConfiguration
