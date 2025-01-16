package io.komune.registry.api.gateway

import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Configuration
import org.springframework.data.r2dbc.config.EnableR2dbcAuditing
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories
import org.springframework.scheduling.annotation.EnableScheduling

@EnableR2dbcRepositories(basePackages = ["io.komune.registry"])
@EnableR2dbcAuditing
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
