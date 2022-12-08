

### Attributes

Type: `ActivityDTO`

The specific set of technologies, measures and/or outcomes, specified in a methodology applied to the project, that alter the conditions identified in the baseline scenario and which result in GHG emission reductions or removals.

  
<article>

***creationDate*** `DateTime` 

Date of creation.

</article>
<article>

***creator*** `UserRef?` 

User that created the record

</article>
<article>

***description*** `String?` 

Description of the activity

</article>
<article>

***endDate*** `DateTime?` 

End of activity date

</article>
<article>

***estimatedEndDate*** `DateTime?` 

Estimated date of the end of the activity

</article>
<article>

***executor*** `OrganizationRef?` 

Organization in charge of executing the task

</article>
<article>

***expectedValue*** `Double?` 

Numeric value expected by the activity.

</article>
<article>

***expectedValueUnit*** `Double?` 

Unit of the expected value ca be used to store non-numeric expected value.

</article>
<article>

***fee*** `Double?` 

Value charged by the executor to execute the task.

</article>
<article>

***id*** [`ActivityId`](#activityid) 

</article>
<article>

***isPublic*** `Boolean?` 

Used to define non-public activities.

</article>
<article>

***issuable*** `Boolean?` 

Used to define activities validating issuance of credits. Expected value is then the amount of asset to issue.

</article>
<article>

***lastModificationDate*** `DateTime` 

Date of last modification of the asset.

</article>
<article>

***name*** `String?` 

Name of the activity

</article>
<article>

***project*** `ProjectRef?` 

Project unique ID Key.

</article>
<article>

***protocol*** `ProtocolRef?` 

Reference to protocol ID Key.

</article>
<article>

***slug*** `String?` 

Short unique text to axess to the activity

</article>
<article>

***startDate*** `DateTime?` 

Start of activity date

</article>
<article>

***status*** `ActivityState` 

Used to trigger record state on the network. List : {NotStarted, Doing, Paused, Done, Pending, Finished, Verified, Cancelled}

</article>
<article>

***subActivityOf*** `ActivityRef?` 

Link of the parent activity. Void when root activity.

</article>
<article>

***validationDate*** `DateTime?` 

Date of validation by validator.

</article>
<article>

***validator*** `OrganizationRef?` 

Organisation in charge of activity validation.

</article>
<article>

***verifiable*** `Boolean?` 

Allow to define if an activity do not need verification. (Default : yes).

</article>
<article>

***verificationDate*** `DateTime?` 

Date of verification.

</article>
<article>

***verifier*** `OrganizationRef?` 

Organization in charge of verification for this activity.

</article>

