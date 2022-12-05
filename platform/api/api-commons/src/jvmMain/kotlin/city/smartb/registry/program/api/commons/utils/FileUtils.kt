package city.smartb.registry.program.api.commons.utils

import kotlinx.coroutines.reactive.awaitLast
import org.springframework.core.io.buffer.DataBuffer
import org.springframework.core.io.buffer.DataBufferUtils
import org.springframework.http.codec.multipart.FilePart
import reactor.core.publisher.Flux
import reactor.core.scheduler.Schedulers
import java.io.ByteArrayOutputStream
import java.io.IOException
import java.io.InputStream

import java.io.PipedInputStream

import java.io.PipedOutputStream




suspend fun FilePart.contentByteArray(): ByteArray {
    return ByteArrayOutputStream().use { os ->
        DataBufferUtils.write(content(), os).awaitLast()
        os.toByteArray()
    }
}

fun Flux<DataBuffer>.asInputStream(): InputStream {
    val osPipe = PipedOutputStream()
    val isPipe = PipedInputStream(osPipe)

    DataBufferUtils.write(this, osPipe)
        .subscribeOn(Schedulers.boundedElastic())
        .doOnComplete {
            try {
                osPipe.close()
            } catch (ignored: IOException) {
            }
        }
        .subscribe(DataBufferUtils.releaseConsumer())
    return isPipe
}
