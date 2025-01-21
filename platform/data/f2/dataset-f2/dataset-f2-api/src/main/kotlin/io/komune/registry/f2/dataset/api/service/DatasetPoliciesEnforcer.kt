package io.komune.registry.f2.dataset.api.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.dataset.domain.policy.DatasetPolicies
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import org.springframework.stereotype.Service

@Service
class DatasetPoliciesEnforcer: PolicyEnforcer() {
    suspend fun checkPage() = check("page datasets") { authedUser ->
        DatasetPolicies.canPage(authedUser)
    }

    suspend fun checkCreation() = checkAuthed("create dataset") { authedUser ->
        DatasetPolicies.canCreate(authedUser)
    }

    suspend fun checkSetImg() = checkAuthed("set img of a dataset") { authedUser ->
        DatasetPolicies.canSetImg(authedUser)
    }

    suspend fun checkDelete(datasetId: DatasetId) = checkAuthed("delete the dataset [$datasetId]") { authedUser ->
        DatasetPolicies.canDelete(authedUser)
    }

    suspend fun checkLinkDatasets() = checkAuthed("links datasets") { authedUser ->
        DatasetPolicies.checkLinkDatasets(authedUser)
    }

    suspend fun checkLinkThemes() = checkAuthed("links themes") { authedUser ->
        DatasetPolicies.checkLinkThemes(authedUser)
    }

    suspend fun checkUpdateDistributions() = checkAuthed("update distributions of a dataset") { authedUser ->
        DatasetPolicies.canUpdateDistributions(authedUser)
    }
}
