package cccev.infra.neo4j

import org.neo4j.ogm.session.SessionFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class Neo4jConfig {

    @Value("\${spring.neo4j.uri}")
    lateinit var uri: String

    @Value("\${spring.neo4j.authentication.username}")
    lateinit var username: String

    @Value("\${spring.neo4j.authentication.password}")
    lateinit var password: String

    @Bean
    fun sessionFactory(): SessionFactory {
        val config = org.neo4j.ogm.config.Configuration.Builder()
            .uri(uri)
            .credentials(username, password)
            .build()
        return SessionFactory(config, "cccev.projection", "cccev.core")
    }
}
