package io.komune.registry.api.gateway

import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Configuration
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@Configuration
@EnableRedisDocumentRepositories(basePackages = ["io.komune.registry"])
@SpringBootApplication(scanBasePackages = ["io.komune.registry"])
class RegisterApplication

fun main(args: Array<String>) {
	SpringApplication(RegisterApplication::class.java).run {
		run(*args)
	}
}
