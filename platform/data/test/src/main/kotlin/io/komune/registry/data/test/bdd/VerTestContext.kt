package io.komune.registry.data.test.bdd

import au.com.origin.snapshots.SnapshotVerifier
import cccev.dsl.model.InformationConceptId
import io.komune.im.f2.organization.domain.model.Organization
import io.komune.registry.f2.activity.domain.model.ActivityId
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Component
import s2.bdd.auth.AuthedUser
import s2.bdd.data.TestContext
import s2.bdd.data.TestContextKey

@Component
class VerTestContext: TestContext() {
    val activityIds = testEntities<TestContextKey, ActivityId>("Activity")
    val assetPoolIds = testEntities<TestContextKey, AssetPoolId>("AssetPool")
    val transactionIds = testEntities<TestContextKey, AssetTransactionId>("Transaction")
    val orderIds = testEntities<TestContextKey, OrderId>("Order")
    val projectIds = testEntities<TestContextKey, ProjectId>("Project")
    val catalogueIds = testEntities<TestContextKey, CatalogueId>("Catalogue")
    val datasetIds = testEntities<TestContextKey, CatalogueId>("Catalogue")

    val cccevConceptIds = testEntities<TestContextKey, InformationConceptId>("CCCEV InformationConcept")
//    val cccevConceptIdentifiers = testEntities<TestContextKey, InformationConceptIdentifier>("CCCEV InformationConcept")
//    val cccevUnitIds = testEntities<TestContextKey, DataUnitId>("CCCEV DataUnit")

    val organizations = testEntities<TestContextKey, Organization>("Organization")
    val users = testEntities<TestContextKey, AuthedUser>("User")

    lateinit var snapshotVerifier: SnapshotVerifier
}
