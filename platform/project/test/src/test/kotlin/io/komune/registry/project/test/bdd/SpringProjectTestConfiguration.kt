package io.komune.registry.project.test.bdd

import io.cucumber.spring.CucumberContextConfiguration
import org.springframework.boot.test.context.SpringBootTest

@CucumberContextConfiguration
@SpringBootTest(classes = [TestProjectApplication::class])
class SpringProjectTestConfiguration
