package city.smartb.registry.api.config

import f2.dsl.fnc.F2Supplier
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2Supplier
import f2.dsl.fnc.f2SupplierSingle
import jakarta.annotation.security.PermitAll
import kotlinx.coroutines.flow.flowOf
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class VersionConfig {

    @Bean
    @PermitAll
    fun version(): F2SupplierSingle<String> = f2SupplierSingle {
        VersionConfig::class.java.`package`.implementationVersion ?: "dev"
    }

    @Bean
    fun apiData(): Api {
        val pack = VersionConfig::class.java.`package`
        return Api(
            title = "Voluntary Emissions Reductions Api",
            version = pack.implementationVersion ?: "dev"
        )
    }

    @Bean
    @PermitAll
    fun about(data: Api): F2Supplier<Api> = f2Supplier {
        flowOf(data)
    }
}

data class Api(
    val title: String?,
    val version: String?
)
