package city.smartb.registry.api.gateway

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Configuration
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@Configuration
@EnableRedisDocumentRepositories(basePackages = ["city.smartb.registry"])
@SpringBootApplication(scanBasePackages = ["city.smartb.registry"])
class RegisterApplication

fun main(args: Array<String>) {
	SpringApplication(RegisterApplication::class.java).run {
		run(*args)
	}
}
