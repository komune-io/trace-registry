package io.komune.registry.api.commons.model

import org.springframework.core.io.buffer.DataBuffer
import org.springframework.core.io.buffer.DefaultDataBufferFactory
import org.springframework.http.HttpHeaders
import org.springframework.http.codec.multipart.FilePart
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.nio.file.Path

class SimpleFilePart(
    val name: String,
    val content: ByteArray
): FilePart {
    override fun name(): String = name
    override fun headers(): HttpHeaders = HttpHeaders.EMPTY
    override fun content(): Flux<DataBuffer> = Flux.just(DefaultDataBufferFactory().wrap(content))
    override fun filename(): String = name
    override fun transferTo(dest: Path): Mono<Void> = Mono.empty()
}
