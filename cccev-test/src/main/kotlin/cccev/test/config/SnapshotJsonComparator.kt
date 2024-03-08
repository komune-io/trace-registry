package cccev.test.config

import au.com.origin.snapshots.Snapshot
import au.com.origin.snapshots.comparators.SnapshotComparator
import org.skyscreamer.jsonassert.JSONAssert

class SnapshotJsonComparator: SnapshotComparator {
    override fun matches(previous: Snapshot, current: Snapshot): Boolean {
        try {
            JSONAssert.assertEquals(previous.body, current.body, false)
            return true
        } catch (e: AssertionError) {
            return false
        }
    }
}
