package city.smartb.registry.program.api.init

import city.smartb.registry.program.api.init.fs.FsInitService
import org.springframework.boot.CommandLineRunner
import org.springframework.context.ConfigurableApplicationContext
import org.springframework.stereotype.Service

@Service
class InitService(
    private val context: ConfigurableApplicationContext,
    private val fsInitService: FsInitService,
): CommandLineRunner {

    override fun run(vararg args: String?) {
        fsInitService.init()
        context.close()
    }
}
