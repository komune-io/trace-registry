package io.komune.registry.script.gateway

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Configuration

@Configuration(proxyBeanMethods = false)
@SpringBootApplication(scanBasePackages = ["io.komune.registry.script"])
class RegistryScriptApplication

fun main(args: Array<String>) {
	SpringApplication(RegistryScriptApplication::class.java).run {
		run(*args)
	}
}
