package io.komune.registry.control.test.bdd

import au.com.origin.snapshots.SnapshotVerifier
import au.com.origin.snapshots.config.PropertyResolvingSnapshotConfig
import io.cucumber.java8.En

class SnapshotSteps(
    private val context: VerTestContext
): En {
    init {
        Before { _ ->
            context.snapshotVerifier = SnapshotVerifier(PropertyResolvingSnapshotConfig(), SnapshotSteps::class.java)
        }

        After { _ ->
            context.snapshotVerifier.validateSnapshots()
        }
    }
}
