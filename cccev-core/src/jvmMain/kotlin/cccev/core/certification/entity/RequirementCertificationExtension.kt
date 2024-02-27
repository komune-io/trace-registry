package cccev.core.certification.entity

fun RequirementCertification.isFulfilled() = isEnabled
        && isValidated
        && hasAllValues
        && subCertifications.all { !it.isEnabled || !it.requirement.required || it.isFulfilled }
