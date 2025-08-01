package io.komune.registry.test

import com.redis.om.spring.annotations.EnableRedisDocumentRepositories
import io.komune.f2.spring.boot.auth.config.WebSecurityConfig
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.data.r2dbc.config.EnableR2dbcAuditing
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.test.context.ActiveProfiles

@EnableScheduling
@EntityScan("io.komune.registry")
@EnableR2dbcRepositories(basePackages = ["io.komune.registry"])
@EnableR2dbcAuditing
@EnableRedisDocumentRepositories(basePackages = ["io.komune.registry"])
@ActiveProfiles("local-geco", "test")
@SpringBootApplication(
    scanBasePackages = ["io.komune.registry", "s2.bdd"],
    exclude = [WebSecurityConfig::class]
)
class TestApplication
