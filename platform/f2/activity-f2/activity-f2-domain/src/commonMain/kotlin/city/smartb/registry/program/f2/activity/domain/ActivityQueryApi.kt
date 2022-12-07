package city.smartb.registry.program.f2.activity.domain

import city.smartb.registry.program.f2.activity.domain.query.ActivityGetFunction
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageFunction

interface ActivityQueryApi {
    /**
     * Get a activity by Id
     */
    fun activityGet(): ActivityGetFunction
    /**
     * Get a page of activity
     */
    fun activityPage(): ActivityPageFunction
}
