package city.smartb.registry.ver.test

import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.test.context.ActiveProfiles

@EnableScheduling
@EntityScan("city.smartb.registry")
@EnableRedisDocumentRepositories(basePackages = ["city.smartb.registry"])
@ActiveProfiles("test")
@SpringBootApplication(
    scanBasePackages = ["city.smartb.registry", "s2.bdd"],
    exclude = [city.smartb.i2.spring.boot.auth.config.WebSecurityConfig::class]
)
class TestApplication
