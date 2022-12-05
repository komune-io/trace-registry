package city.smartb.registry.program.api.init

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@EntityScan("fr.alveole")
//@SpringBootApplication(scanBasePackages = ["fr.alveole"])
class AlveoleInitApplication

fun main(args: Array<String>) {
	SpringApplication(AlveoleInitApplication::class.java).run {
		setAdditionalProfiles("init")
		run(*args)
	}
}
