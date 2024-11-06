package io.komune.registry.f2.dcs.api

import com.fasterxml.jackson.core.JsonProcessingException
import com.fasterxml.jackson.databind.JsonMappingException
import f2.dsl.fnc.f2Function
import io.komune.registry.api.commons.utils.parseJsonTo
import io.komune.registry.f2.dcs.api.service.DcsF2AggregateService
import io.komune.registry.f2.dcs.api.service.DcsF2FinderService
import io.komune.registry.f2.dcs.domain.DcsApi
import io.komune.registry.f2.dcs.domain.command.DataCollectionStepDefineFunction
import io.komune.registry.f2.dcs.domain.command.DataCollectionStepFillCommand
import io.komune.registry.f2.dcs.domain.command.DataCollectionStepFilledEvent
import io.komune.registry.f2.dcs.domain.query.DataCollectionStepGetFunction
import io.komune.registry.f2.dcs.domain.query.DataCollectionStepGetResult
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.http.HttpStatus
import org.springframework.http.codec.multipart.FilePart
import org.springframework.http.codec.multipart.FormFieldPart
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
class DcsEndpoint(
    private val dcsF2AggregateService: DcsF2AggregateService,
    private val dcsF2FinderService: DcsF2FinderService
): DcsApi {
    private val logger by Logger()

    @PermitAll
    @Bean
    override fun dataCollectionStepDefine(): DataCollectionStepDefineFunction = f2Function { command ->
        logger.info("dataCollectionStepDefine: $command")
        // TODO dcsPoliciesEnforcer.checkDefine()
        dcsF2AggregateService.define(command)
    }

    @PermitAll
    @PostMapping("/dataCollectionStepFill")
    suspend fun dataCollectionStepFill(
        @RequestBody parts: MultiValueMap<String, Part>
    ): DataCollectionStepFilledEvent {
        val command = try {
            (parts["command"]!!.first() as FormFieldPart)
                .value()
                .parseJsonTo<DataCollectionStepFillCommand>()
        } catch (e: NullPointerException) {
            throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing command part")
        } catch (e: JsonProcessingException) {
            throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Invalid command part: ${e.message}")
        } catch (e: JsonMappingException) {
            throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Invalid command part: ${e.message}")
        }

        logger.info("dataCollectionStepFill: $command")

        val evidences = parts.mapValues {
            (_, potentialFiles) -> potentialFiles.firstOrNull { it is FilePart } as FilePart?
        }.filterValues { file -> file != null } as Map<String, FilePart>

        // TODO dcsPoliciesEnforcer.checkFill()
        return dcsF2AggregateService.fill(command, evidences)
    }

    @PermitAll
    @Bean
    override fun dataCollectionStepGet(): DataCollectionStepGetFunction = f2Function { query ->
        logger.info("dataCollectionStepGet: $query")
        // TODO dcsPoliciesEnforcer.checkGet()
        val structure = dcsF2FinderService.get(query.identifier)
        val values = query.certificationId?.let { dcsF2FinderService.getValues(query.identifier, it) }
        DataCollectionStepGetResult(
            structure = structure,
            values = values.orEmpty()
        )
    }
}
