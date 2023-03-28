package city.smartb.registry.program.ver.test

import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@EntityScan("city.smartb.registry")
@EnableRedisDocumentRepositories(basePackages = ["city.smartb.registry"])
@SpringBootApplication(scanBasePackages = ["city.smartb.registry", "s2.bdd"])
class TestApplication
