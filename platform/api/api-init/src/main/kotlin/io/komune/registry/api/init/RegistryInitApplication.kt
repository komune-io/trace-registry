package io.komune.registry.api.init

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@EntityScan("io.komune.registry")
//@SpringBootApplication(scanBasePackages = ["io.komune.registry"])
class RegistryInitApplication

fun main(args: Array<String>) {
	SpringApplication(RegistryInitApplication::class.java).run {
		setAdditionalProfiles("init")
		run(*args)
	}
}
