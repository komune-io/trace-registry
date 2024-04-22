import io.komune.registry.f2.activity.domain.command.ActivityCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepFulfillFunction

interface ActivityCommandApi {
    /** Create an activity */
    fun activityCreate(): ActivityCreateFunction

    /** Create an activity step */
    fun activityStepCreate(): ActivityStepCreateFunction

    /** Fulfill an activity step */
    fun activityStepFulfill(): ActivityStepFulfillFunction
}
