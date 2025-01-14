package io.komune.registry.f2.user.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import kotlin.js.JsExport

/**
 * Sign up a user and initialize their organization.
 * @d2 function
 * @parent [io.komune.registry.f2.user.domain.D2UserPage]
 * @order 10
 */
typealias UserOnboardFunction = F2Function<UserOnboardCommandDTOBase, UserOnboardedEventDTOBase>

/**
 * @d2 command
 */
@JsExport
interface UserOnboardCommandDTO {
    /**
     * Email of the user to create.
     * @example "jerry.pait@gmail.com"
     */
    val email: String

    /**
     * Password of the user to create.
     * @example "passw0rd"
     */
    val password: String

    /**
     * First name of the user.
     */
    val givenName: String

    /**
     * Last name of the user.
     */
    val familyName: String

    /**
     * Name of the organization to create.
     * @example "Kosmio"
     */
    val organizationName: String

    /**
     * Reason for joining Objectif100M.
     * @example "I want to be da best."
     */
    val joinReason: String

    /**
     * Whether the user accepts the terms of use.
     * @example true
     */
    val acceptTermsOfUse: Boolean

    /**
     * Whether the user accepts the chart of Objectif100M.
     * @example true
     */
    val acceptChart100M: Boolean

    /**
     * Whether the user accepts to receive emails from Objectif100M.
     * @example false
     */
    val acceptNewsletter: Boolean
}

/**
 * @d2 inherit
 */
data class UserOnboardCommandDTOBase(
    override val email: String,
    override val password: String,
    override val givenName: String,
    override val familyName: String,
    override val organizationName: String,
    override val joinReason: String,
    override val acceptTermsOfUse: Boolean,
    override val acceptChart100M: Boolean,
    override val acceptNewsletter: Boolean
) : UserOnboardCommandDTO

/**
 * @d2 event
 */
@JsExport
interface UserOnboardedEventDTO {
    /**
     * Id of the created user.
     */
    val id: UserId

    /**
     * Id of the created organization.
     */
    val organizationId: OrganizationId
}

/**
 * @d2 inherit
 */
data class UserOnboardedEventDTOBase(
    override val id: UserId,
    override val organizationId: OrganizationId
) : UserOnboardedEventDTO
