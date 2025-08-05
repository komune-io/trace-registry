package io.komune.registry.control.f2.certification.api

import com.fasterxml.jackson.core.JsonProcessingException
import com.fasterxml.jackson.databind.JsonMappingException
import f2.dsl.fnc.f2Function
import io.komune.registry.api.commons.utils.parseJsonTo
import io.komune.registry.control.f2.certification.api.service.CertificationF2AggregateService
import io.komune.registry.control.f2.certification.api.service.CertificationF2FinderService
import io.komune.registry.control.f2.certification.domain.command.CertificationFillCommandDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationFilledEventDTOBase
import io.komune.registry.control.f2.certification.domain.query.CertificationGetFunction
import io.komune.registry.control.f2.certification.domain.query.CertificationGetResult
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import kotlinx.coroutines.reactive.awaitSingle
import org.springframework.context.annotation.Bean
import org.springframework.http.HttpStatus
import org.springframework.http.codec.multipart.FilePart
import org.springframework.http.codec.multipart.Part
import org.springframework.util.MultiValueMap
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.HttpClientErrorException
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class CertificationEndpoint(
    private val certificationF2AggregateService: CertificationF2AggregateService,
    private val certificationF2FinderService: CertificationF2FinderService
) {
    private val logger by Logger()

    @Bean
    fun certificationGet(): CertificationGetFunction = f2Function { query ->
        logger.info("certificationGet: $query")
        // TODO certificationPoliciesEnforcer.checkGet()
        certificationF2FinderService.getOrNull(query.id).let(::CertificationGetResult)
    }

    @PostMapping("/control/certificationFill")
    suspend fun certificationFill(
        @RequestBody parts: MultiValueMap<EvidenceTypeIdentifier, Part>
    ): CertificationFilledEventDTOBase {
        val command = try {
            parts["command"]!!.first()
                .content()
                .awaitSingle()
                .asInputStream()
                .readAllBytes()
                .let(::String)
                .parseJsonTo<CertificationFillCommandDTOBase>()
        } catch (_: NullPointerException) {
            throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing command part")
        } catch (_: NoSuchElementException) {
            throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing command part")
        } catch (e: JsonProcessingException) {
            throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Invalid command part: ${e.message}")
        } catch (e: JsonMappingException) {
            throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Invalid command part: ${e.message}")
        }

        logger.info("certificationFill: $command")

        @Suppress("UNCHECKED_CAST")
        val evidences = parts.mapValues { (_, potentialFiles) ->
            potentialFiles.firstNotNullOfOrNull { it as? FilePart }
        }.filterValues { file -> file != null } as Map<EvidenceTypeIdentifier, FilePart>

        // TODO certificationPoliciesEnforcer.checkFill()
        return certificationF2AggregateService.fill(command, evidences)
    }
}
