package city.smartb.registry.program.bdd.assertion

import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.s2.project.api.entity.project.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.project.ProjectRepository
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import org.assertj.core.api.Assertions

fun AssertionBdd.project(projectRepository: ProjectRepository) = AssertionProject(projectRepository)

class AssertionProject(
    override val repository: ProjectRepository
): AssertionPostgresEntity<ProjectEntity, ProjectId, AssertionProject.ProjectAssert>() {

    override fun assertThat(entity: ProjectEntity) = ProjectAssert(entity)

    inner class ProjectAssert(
        private val project: ProjectEntity
    ) {
        fun hasFields(
            id: ProjectId = project.id,
            friendlyId: String = project.friendlyId,
            status: ProjectState = project.status,
            name: String = project.name,
            beneficiaryId: UserId = project.beneficiaryId,
            supervisorId: UserId = project.supervisorId,
        ) = also {
            Assertions.assertThat(project.id).isEqualTo(id)
            Assertions.assertThat(project.friendlyId).isEqualTo(friendlyId)
            Assertions.assertThat(project.status).isEqualTo(status)
            Assertions.assertThat(project.name).isEqualTo(name)
            Assertions.assertThat(project.beneficiaryId).isEqualTo(beneficiaryId)
            Assertions.assertThat(project.supervisorId).isEqualTo(supervisorId)
        }

        fun hasNeeds(
//             parkType: ProjectParkType = project.needs!!.parkType,
//             withInstallation: Boolean = project.needs!!.withInstallation,
//             bikeCount: Int = project.needs!!.bikeCount,
//             lockerCount: Int = project.needs!!.lockerCount,
//             inflationStationCount: Int = project.needs!!.inflationStationCount,
//             toolStationCount: Int = project.needs!!.toolStationCount,
        ) = also {
//            Assertions.assertThat(project.needs).isNotNull
//            Assertions.assertThat(project.needs!!.parkType).isEqualTo(parkType)
//            Assertions.assertThat(project.needs!!.withInstallation).isEqualTo(withInstallation)
//            Assertions.assertThat(project.needs!!.bikeCount).isEqualTo(bikeCount)
//            Assertions.assertThat(project.needs!!.lockerCount).isEqualTo(lockerCount)
//            Assertions.assertThat(project.needs!!.inflationStationCount).isEqualTo(inflationStationCount)
//            Assertions.assertThat(project.needs!!.toolStationCount).isEqualTo(toolStationCount)
        }

//        fun hasEnvironment(
//            description: String = project.workEnvironment!!.description,
//            image: String? = project.workEnvironment!!.image,
//        ) = also {
//            Assertions.assertThat(project.workEnvironment).isNotNull
//            Assertions.assertThat(project.workEnvironment!!.description).isEqualTo(description)
//            Assertions.assertThat(project.workEnvironment!!.image).isEqualTo(image)
//        }

        fun hasNotStatus(status: ProjectState) = also {
            Assertions.assertThat(project.status).isNotEqualTo(status)
        }
    }
}
