package cccev.f2.requirement.api

import cccev.f2.commons.CccevFlatGraph
import cccev.f2.requirement.api.model.flattenTo
import cccev.f2.requirement.api.service.RequirementF2AggregateService
import cccev.f2.requirement.api.service.RequirementF2FinderService
import cccev.f2.requirement.domain.RequirementApi
import cccev.f2.requirement.domain.command.ConstraintCreateFunction
import cccev.f2.requirement.domain.command.CriterionCreateFunction
import cccev.f2.requirement.domain.command.InformationRequirementCreateFunction
import cccev.f2.requirement.domain.command.RequirementAddRequirementsFunction
import cccev.f2.requirement.domain.command.RequirementCreateFunction
import cccev.f2.requirement.domain.command.RequirementUpdateFunction
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierFunction
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierResultDTOBase
import cccev.f2.requirement.domain.query.RequirementGetFunction
import cccev.f2.requirement.domain.query.RequirementGetResultDTOBase
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

@Configuration
class RequirementEndpoint(
    private val requirementF2AggregateService: RequirementF2AggregateService,
    private val requirementF2FinderService: RequirementF2FinderService,
): RequirementApi {
    private val logger by Logger()

    @Bean
    override fun requirementGet(): RequirementGetFunction = f2Function { query ->
        logger.info("requirementGet: $query")
        val requirement = requirementF2FinderService.getOrNull(query.id)
        val graph = CccevFlatGraph().also { requirement?.flattenTo(it) }

        RequirementGetResultDTOBase(
            item = graph.requirements[requirement?.identifier],
            graph = graph
        )
    }

    @Bean
    override fun requirementGetByIdentifier(): RequirementGetByIdentifierFunction = f2Function { query ->
        logger.info("requirementGetByIdentifier: $query")
        val requirement = requirementF2FinderService.getOrNullByIdentifier(query.identifier)
        val graph = CccevFlatGraph().also { requirement?.flattenTo(it) }

        RequirementGetByIdentifierResultDTOBase(
            item = graph.requirements[requirement?.identifier],
            graph = graph
        )
    }

    @Bean
    override fun constraintCreate(): ConstraintCreateFunction = f2Function { command ->
        logger.info("constraintCreate: $command")
        requirementF2AggregateService.create(command)
    }

    @Bean
    override fun criterionCreate(): CriterionCreateFunction = f2Function { command ->
        logger.info("criterionCreate: $command")
        requirementF2AggregateService.create(command)
    }

    @Bean
    override fun informationRequirementCreate(): InformationRequirementCreateFunction = f2Function { command ->
        logger.info("informationRequirementCreate: $command")
        requirementF2AggregateService.create(command)
    }

    @Bean
    override fun requirementCreate(): RequirementCreateFunction = f2Function { command ->
        logger.info("requirementCreate: $command")
        requirementF2AggregateService.create(command)
    }

    @Bean
    override fun requirementUpdate(): RequirementUpdateFunction = f2Function { command ->
        logger.info("requirementCreate: $command")
        requirementF2AggregateService.update(command)
    }

    @Bean
    override fun requirementAddRequirements(): RequirementAddRequirementsFunction = f2Function { command ->
        logger.info("requirementAddRequirements: $command")
        requirementF2AggregateService.addRequirements(command)
    }
}
