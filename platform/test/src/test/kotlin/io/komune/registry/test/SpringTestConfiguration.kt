package io.komune.registry.test

import io.cucumber.spring.CucumberContextConfiguration
import org.springframework.boot.test.context.SpringBootTest

@CucumberContextConfiguration
@SpringBootTest(classes = [TestApplication::class])
class SpringTestConfiguration
