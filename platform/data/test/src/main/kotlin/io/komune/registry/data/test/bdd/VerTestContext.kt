package io.komune.registry.data.test.bdd

import au.com.origin.snapshots.SnapshotVerifier
import cccev.dsl.model.InformationConceptId
import io.komune.im.f2.organization.domain.model.Organization
import io.komune.registry.f2.activity.domain.model.ActivityId
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Component
import s2.bdd.auth.AuthedUser
import s2.bdd.data.TestContext
import s2.bdd.data.TestContextKey

typealias ActivityKey = TestContextKey
typealias AssetPoolKey = TestContextKey
typealias TransactionKey = TestContextKey
typealias OrderKey = TestContextKey
typealias ProjectKey = TestContextKey
typealias CatalogueKey = TestContextKey
typealias ConceptKey = TestContextKey
typealias DatasetKey = TestContextKey

typealias CccevConceptKey = TestContextKey

typealias OrganizationKey = TestContextKey
typealias UserKey = TestContextKey

@Component
class VerTestContext: TestContext() {
    val activityIds = testEntities<ActivityKey, ActivityId>("Activity")
    val assetPoolIds = testEntities<AssetPoolKey, AssetPoolId>("AssetPool")
    val transactionIds = testEntities<TransactionKey, AssetTransactionId>("Transaction")
    val orderIds = testEntities<OrderKey, OrderId>("Order")
    val projectIds = testEntities<ProjectKey, ProjectId>("Project")
    val catalogueIds = testEntities<CatalogueKey, CatalogueId>("Catalogue")
    val conceptIds = testEntities<ConceptKey, ConceptId>("Concept")
    val datasetIds = testEntities<DatasetKey, CatalogueId>("Catalogue")

    val cccevConceptIds = testEntities<CccevConceptKey, InformationConceptId>("CCCEV InformationConcept")
//    val cccevConceptIdentifiers = testEntities<TestContextKey, InformationConceptIdentifier>("CCCEV InformationConcept")
//    val cccevUnitIds = testEntities<TestContextKey, DataUnitId>("CCCEV DataUnit")

    val organizations = testEntities<OrganizationKey, Organization>("Organization")
    val users = testEntities<UserKey, AuthedUser>("User")

    lateinit var snapshotVerifier: SnapshotVerifier
}
