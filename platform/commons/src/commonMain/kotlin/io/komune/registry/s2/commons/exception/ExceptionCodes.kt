@file:Suppress("FunctionOnlyReturningConstant")
package io.komune.registry.s2.commons.exception

object ExceptionCodes {
    object Asset {
        const val NOT_ENOUGH_ASSETS = 1000
        const val NEGATIVE_TRANSACTION = 1001
        const val GRANULARITY_TOO_SMALL = 1002
    }

    object User {
        const val EMAIL_EXISTS = 2000
        const val UNACCEPTED_TERMS = 2001
        const val ORGANIZATION_EXISTS = 2002
    }

    object Catalogue {
        const val INVALID_PARENT_TYPE = 3000
        const val PARENT_IS_DESCENDANT = 3001
        const val DRAFT_DOES_NOT_MATCH = 3002
    }
}
