package city.smartb.registry.program.bdd.steps.s2.project

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.api.entity.project.ProjectRepository
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class ProjectUpdateQuotationStepSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var projectAggregateService: ProjectAggregateService

    @Autowired
    private lateinit var projectRepository: ProjectRepository


}
