package city.smartb.registry.f2.dataset.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.f2.dataset.domain.policy.DatasetPolicies
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import org.springframework.stereotype.Service

@Service
class DatasetPoliciesEnforcer(
    private val datasetF2FinderService: DatasetF2FinderService
): PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        DatasetPolicies.canPage(authedUser)
    }
    suspend fun checkCreation() = checkAuthed("create dataset") { authedUser ->
        DatasetPolicies.canCreate(authedUser)
    }
    suspend fun checkSetImg() = checkAuthed("set img") { authedUser ->
        DatasetPolicies.canSetImg(authedUser)
    }
    suspend fun checkDelete(
        datasetId: DatasetId
    ) = checkAuthed("delete the dataset [$datasetId]") { authedUser ->
        DatasetPolicies.canDelete(authedUser)
    }
    suspend fun checkLinkDatasets() = checkAuthed("links datasets") { authedUser ->
        DatasetPolicies.checkLinkDatasets(authedUser)
    }
    suspend fun checkLinkThemes() = checkAuthed("links themes") { authedUser ->
        DatasetPolicies.checkLinkThemes(authedUser)
    }

}
