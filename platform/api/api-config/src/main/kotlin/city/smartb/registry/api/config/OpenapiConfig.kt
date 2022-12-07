package city.smartb.registry.api.config

import f2.dsl.fnc.F2Supplier
import io.swagger.v3.oas.models.Components
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.info.License
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class OpenapiConfig {

    @Bean
    fun customOpenAPI(api: Api): OpenAPI {
        return OpenAPI()
            .components(Components())
            .info(
                Info().title(api.title ?: "").version(api.version)
                    .license(License().name("Apache 2.0").url("http://smartb.city")));
    }
}
