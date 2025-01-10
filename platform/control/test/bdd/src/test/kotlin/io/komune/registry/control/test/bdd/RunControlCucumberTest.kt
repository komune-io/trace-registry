package io.komune.registry.control.test.bdd

import io.cucumber.junit.platform.engine.Constants
import org.junit.platform.suite.api.ConfigurationParameter
import org.junit.platform.suite.api.IncludeEngines
import org.junit.platform.suite.api.SelectClasspathResource
import org.junit.platform.suite.api.Suite

@Suite
@IncludeEngines("cucumber")
@SelectClasspathResource("io.komune.registry.control.test.bdd")
@ConfigurationParameter(key = Constants.GLUE_PROPERTY_NAME, value = "io.komune.registry.control.test.bdd")
class RunControlCucumberTest
