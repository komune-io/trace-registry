package city.smartb.registry.program.f2.activity.domain

import city.smartb.registry.program.f2.activity.domain.query.ActivityPageFunction
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageFunction

interface ActivityQueryApi {

    /**
     * Get a page of activity
     */
    fun activityPage(): ActivityPageFunction

    /**
     * Get a page of activity step
     */
    fun activityStepPage(): ActivityStepPageFunction
}
