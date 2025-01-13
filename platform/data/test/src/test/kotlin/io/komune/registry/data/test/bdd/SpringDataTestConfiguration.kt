package io.komune.registry.data.test.bdd

import io.cucumber.spring.CucumberContextConfiguration
import org.springframework.boot.test.context.SpringBootTest

@CucumberContextConfiguration
@SpringBootTest(classes = [TestDataApplication::class])
class SpringDataTestConfiguration
