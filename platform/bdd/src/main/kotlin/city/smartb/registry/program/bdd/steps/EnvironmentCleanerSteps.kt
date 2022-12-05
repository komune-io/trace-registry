package city.smartb.registry.program.bdd.steps

import city.smartb.im.organization.domain.features.command.OrganizationDeleteCommand
import city.smartb.im.organization.domain.features.query.OrganizationPageQuery
import city.smartb.im.user.domain.features.command.UserDeleteCommand
import city.smartb.im.user.domain.features.query.UserPageQuery
import f2.dsl.fnc.invokeWith
import city.smartb.registry.program.bdd.data.TestContext
import city.smartb.registry.program.s2.notification.domain.model.NotificationType
import io.cucumber.java8.En
import kotlinx.coroutines.runBlocking

class EnvironmentCleanerSteps(
    private val context: TestContext,
): En {
    init {
        Before { _ ->
            context.reset()
            cleanDb()
//            initEmailConfigs()
            cleanKeycloak()
        }
    }

    private fun cleanDb() {
//        TODO()
    }

    private fun cleanKeycloak() = runBlocking {
//        cleanKeycloakUsers()
//        cleanKeycloakOrganizations()
    }

//    private suspend fun cleanKeycloakOrganizations() {
//        OrganizationPageQuery(
//            page = 0,
//            size = Int.MAX_VALUE,
//            search = null,
//            attributes = null,
//            role = null,
//            withDisabled = true
//        ).invokeWith(organizationFeaturesImpl.organizationPage())
//            .items
//            .map { OrganizationDeleteCommand(it.id).invokeWith(organizationFeaturesImpl.organizationDelete()) }
//    }

//    private suspend fun cleanKeycloakUsers() {
//        UserPageQuery(
//            page = 0,
//            size = Int.MAX_VALUE,
//            organizationId = null,
//            search = null,
//            attributes = null,
//            role = null,
//            withDisabled = true
//        ).invokeWith(userFeaturesImpl.userPage())
//            .items
//            .map { UserDeleteCommand(it.id).invokeWith(userFeaturesImpl.userDelete()) }
//    }
}
