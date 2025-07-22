package io.komune.registry.core.cccev.certification.entity

fun RequirementCertification.isFulfilled() = isEnabled
        && isValidated
        && hasAllValues
        && areEvidencesProvided
        && subCertifications.all { !it.isEnabled || !it.requirement.required || it.isFulfilled }
