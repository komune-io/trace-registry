package city.smartb.registry.api.init

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@EntityScan("city.smartb.registry")
//@SpringBootApplication(scanBasePackages = ["city.smartb.registry"])
class RegistryInitApplication

fun main(args: Array<String>) {
	SpringApplication(RegistryInitApplication::class.java).run {
		setAdditionalProfiles("init")
		run(*args)
	}
}
