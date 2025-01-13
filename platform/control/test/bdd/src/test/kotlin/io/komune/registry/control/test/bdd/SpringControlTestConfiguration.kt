package io.komune.registry.control.test.bdd

import io.cucumber.spring.CucumberContextConfiguration
import org.springframework.boot.test.context.SpringBootTest

@CucumberContextConfiguration
@SpringBootTest(classes = [TestControlApplication::class])
class SpringControlTestConfiguration
