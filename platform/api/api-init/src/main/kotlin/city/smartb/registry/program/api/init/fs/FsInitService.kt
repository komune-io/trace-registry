package city.smartb.registry.program.api.init.fs

import city.smartb.fs.s2.file.client.FileClient
import kotlinx.coroutines.runBlocking
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class FsInitService(
    private val fileClient: FileClient
) {
    private val logger by Logger()

    fun init() = runBlocking {}

}
