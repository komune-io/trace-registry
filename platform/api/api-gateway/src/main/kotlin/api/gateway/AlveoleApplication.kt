package city.smartb.registry.api.gateway

import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@EnableRedisDocumentRepositories("city.smartb.registry")
@SpringBootApplication(scanBasePackages = ["city.smartb.registry"])
class AlveoleApplication

fun main(args: Array<String>) {
	SpringApplication(AlveoleApplication::class.java).run {
		run(*args)
	}
}
