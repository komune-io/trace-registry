package io.komune.registry.data.test.bdd

import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import io.komune.f2.spring.boot.auth.config.WebSecurityConfig
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.test.context.ActiveProfiles

@EnableScheduling
@EntityScan("io.komune.registry")
@EnableRedisDocumentRepositories(basePackages = ["io.komune.registry"])
@ActiveProfiles("test")
@SpringBootApplication(
    scanBasePackages = ["io.komune.registry", "s2.bdd"],
    exclude = [WebSecurityConfig::class]
)
class TestDataApplication
