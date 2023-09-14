package city.smartb.registry.script.gateway

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Configuration

@Configuration(proxyBeanMethods = false)
@SpringBootApplication(scanBasePackages = ["city.smartb.registry.script"])
class RegistryScriptApplication

fun main(args: Array<String>) {
	SpringApplication(RegistryScriptApplication::class.java).run {
//        setAdditionalProfiles("local")
		run(*args)
	}
}
