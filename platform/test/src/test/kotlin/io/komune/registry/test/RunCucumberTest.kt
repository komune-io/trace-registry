package io.komune.registry.test

import io.cucumber.junit.platform.engine.Constants
import org.junit.platform.suite.api.ConfigurationParameter
import org.junit.platform.suite.api.IncludeEngines
import org.junit.platform.suite.api.SelectClasspathResource
import org.junit.platform.suite.api.Suite

@Suite
@IncludeEngines("cucumber")
@SelectClasspathResource("io.komune.registry.test")
@ConfigurationParameter(key = Constants.GLUE_PROPERTY_NAME, value = "io.komune.registry.test")
class RunCucumberTest
