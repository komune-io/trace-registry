import city.smartb.registry.f2.activity.domain.command.ActivityCreateFunction
import city.smartb.registry.f2.activity.domain.command.ActivityStepCreateFunction
import city.smartb.registry.f2.activity.domain.command.ActivityStepFulfillFunction

interface ActivityCommandApi {
    /** Create an activity */
    fun activityCreate(): ActivityCreateFunction

    /** Create an activity step */
    fun activityStepCreate(): ActivityStepCreateFunction

    /** Fulfill an activity step */
    fun activityStepFulfill(): ActivityStepFulfillFunction
}
