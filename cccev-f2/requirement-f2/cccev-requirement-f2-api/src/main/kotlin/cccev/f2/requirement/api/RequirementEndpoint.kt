package cccev.f2.requirement.api

import cccev.f2.requirement.api.service.RequirementF2AggregateService
import cccev.f2.requirement.api.service.RequirementF2FinderService
import cccev.f2.requirement.domain.RequirementApi
import cccev.f2.requirement.domain.command.ConstraintCreateCommandDTOBase
import cccev.f2.requirement.domain.command.ConstraintCreateFunction
import cccev.f2.requirement.domain.command.CriterionCreateCommandDTOBase
import cccev.f2.requirement.domain.command.CriterionCreateFunction
import cccev.f2.requirement.domain.command.InformationRequirementCreateCommandDTOBase
import cccev.f2.requirement.domain.command.InformationRequirementCreateFunction
import cccev.f2.requirement.domain.command.RequirementAddRequirementsFunction
import cccev.f2.requirement.domain.command.RequirementCreateFunction
import cccev.f2.requirement.domain.command.RequirementUpdateFunction
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierFunction
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierResultDTOBase
import cccev.f2.requirement.domain.query.RequirementGetFunction
import cccev.f2.requirement.domain.query.RequirementGetResultDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeFunction
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeResultDTOBase
import cccev.f2.requirement.domain.query.RequirementListQueryFunction
import cccev.f2.requirement.domain.query.RequirementListResult
import cccev.s2.requirement.domain.model.RequirementKind
import f2.dsl.fnc.f2Function
import kotlinx.coroutines.flow.toList
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
        requirementF2FinderService.getOrNull(query.id).let(::RequirementGetResultDTOBase)
    }

    @Bean
    override fun requirementGetByIdentifier(): RequirementGetByIdentifierFunction = f2Function { query ->
        logger.info("requirementGetByIdentifier: $query")
        requirementF2FinderService.getOrNullByIdentifier(query.identifier).let(::RequirementGetByIdentifierResultDTOBase)
    }

    @Bean
    override fun requirementListChildrenByType(): RequirementListChildrenByTypeFunction = f2Function { query ->
        logger.info("requirementListChildrenByTypeFunction $query")
        requirementF2FinderService.listByIdsAndType(query.identifiers, query.type)
            .let(::RequirementListChildrenByTypeResultDTOBase)
    }

    @Bean
    override fun requirementsList(): RequirementListQueryFunction = f2Function { query ->
        logger.info("requirementsList: $query")
        requirementF2FinderService.list(
            isRequirementOf = query.parentId,
            concept = query.conceptId,
            evidenceType = query.evidenceTypeId
        ).toList().let(::RequirementListResult)
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
        when (RequirementKind.valueOf(command.kind)) {
            RequirementKind.CONSTRAINT -> requirementF2AggregateService.create(ConstraintCreateCommandDTOBase(
                identifier = command.identifier,
                name = command.name,
                description = command.description,
                type = command.type,
                isDerivedFrom = command.isDerivedFrom,
                hasRequirement = command.hasRequirement,
                hasConcept = command.hasConcept,
                hasEvidenceTypeList = command.hasEvidenceTypeList,
                hasQualifiedRelation = command.hasQualifiedRelation,
                enablingCondition = command.enablingCondition,
                enablingConditionDependencies = command.enablingConditionDependencies,
                required = command.required,
                validatingCondition = command.validatingCondition,
                validatingConditionDependencies = command.validatingConditionDependencies,
                order = command.order,
                properties = command.properties
            ))
            RequirementKind.CRITERION ->  requirementF2AggregateService.create(CriterionCreateCommandDTOBase(
                identifier = command.identifier,
                name = command.name,
                description = command.description,
                type = command.type,
                isDerivedFrom = command.isDerivedFrom,
                hasRequirement = command.hasRequirement,
                hasConcept = command.hasConcept,
                hasEvidenceTypeList = command.hasEvidenceTypeList,
                hasQualifiedRelation = command.hasQualifiedRelation,
                enablingCondition = command.enablingCondition,
                enablingConditionDependencies = command.enablingConditionDependencies,
                required = command.required,
                validatingCondition = command.validatingCondition,
                validatingConditionDependencies = command.validatingConditionDependencies,
                order = command.order,
                properties = command.properties
            ))
            RequirementKind.INFORMATION -> requirementF2AggregateService.create(InformationRequirementCreateCommandDTOBase(
                identifier = command.identifier,
                name = command.name,
                description = command.description,
                type = command.type,
                isDerivedFrom = command.isDerivedFrom,
                hasRequirement = command.hasRequirement,
                hasConcept = command.hasConcept,
                hasEvidenceTypeList = command.hasEvidenceTypeList,
                hasQualifiedRelation = command.hasQualifiedRelation,
                enablingCondition = command.enablingCondition,
                enablingConditionDependencies = command.enablingConditionDependencies,
                required = command.required,
                validatingCondition = command.validatingCondition,
                validatingConditionDependencies = command.validatingConditionDependencies,
                order = command.order,
                properties = command.properties
            ))
        }
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
