package city.smartb.registry.program.bdd

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@EntityScan("fr.alveole")
@SpringBootApplication(scanBasePackages = ["fr.alveole"])
@EnableJpaAuditing
@EnableJpaRepositories(basePackages = ["fr.alveole"])
class TestApplication
