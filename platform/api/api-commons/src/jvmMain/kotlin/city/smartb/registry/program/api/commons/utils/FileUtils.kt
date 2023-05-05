package city.smartb.registry.program.api.commons.utils

import city.smartb.fs.s2.file.domain.features.command.FileUploadCommand
import city.smartb.fs.s2.file.domain.model.FilePath
import kotlinx.coroutines.reactive.awaitLast
import org.springframework.core.io.buffer.DataBufferUtils
import org.springframework.http.codec.multipart.FilePart
import java.io.ByteArrayOutputStream

//suspend fun FilePart.contentByteArray(): ByteArray {
//    return ByteArrayOutputStream().use { os ->
//        DataBufferUtils.write(content(), os).awaitLast()
//        os.toByteArray()
//    }
//}

//fun FilePath.toUploadCommand() = FileUploadCommand(
//    path = this,
//    metadata = mapOf(
//        "uploadedAt" to System.currentTimeMillis().toString()
//    )
//)
