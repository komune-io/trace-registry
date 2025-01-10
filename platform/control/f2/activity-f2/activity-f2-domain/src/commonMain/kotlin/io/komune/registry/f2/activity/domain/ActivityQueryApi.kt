package io.komune.registry.f2.activity.domain

import io.komune.registry.f2.activity.domain.query.ActivityPageFunction
import io.komune.registry.f2.activity.domain.query.ActivityStepPageFunction

interface ActivityQueryApi {
    /** Get a page of activity */
    fun activityPage(): ActivityPageFunction

    /** Get a page of activity step */
    fun activityStepPage(): ActivityStepPageFunction
}
