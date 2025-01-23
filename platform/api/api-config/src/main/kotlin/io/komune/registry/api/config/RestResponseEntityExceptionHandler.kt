package io.komune.registry.api.config

import com.fasterxml.jackson.databind.JsonMappingException
import f2.dsl.cqrs.exception.F2Exception
import io.komune.registry.api.commons.exception.MessageConverterException
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.reactive.result.method.annotation.ResponseEntityExceptionHandler
import org.springframework.web.server.ServerWebExchange
import reactor.core.publisher.Mono

@ControllerAdvice
open class RestResponseEntityExceptionHandler : ResponseEntityExceptionHandler() {
	@ExceptionHandler(value = [F2Exception::class])
	protected fun handleF2Exception(
		ex: F2Exception, request: ServerWebExchange
	): Mono<ResponseEntity<Any>> {
		val httpStatus = try {
			HttpStatus.valueOf(ex.error.code)
		} catch (e: IllegalArgumentException) {
			HttpStatus.INTERNAL_SERVER_ERROR
		}
		return handleExceptionInternal(
			ex, ex.error, HttpHeaders(), httpStatus, request
		)
	}
	@ExceptionHandler(value = [JsonMappingException::class])
	protected fun handleJsonMappingException(
		ex: JsonMappingException, request: ServerWebExchange
	): Mono<ResponseEntity<Any>> {
		return handleF2Exception(MessageConverterException(ex), request)
	}
}
