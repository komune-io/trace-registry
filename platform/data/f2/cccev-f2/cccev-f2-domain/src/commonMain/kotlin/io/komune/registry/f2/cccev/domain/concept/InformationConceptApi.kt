package io.komune.registry.f2.cccev.domain.concept

import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptCreateFunction
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptUpdateFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetByIdentifierFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetGlobalValueFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptListFunction

interface InformationConceptApi : InformationConceptCommandApi, InformationConceptQueryApi

interface InformationConceptCommandApi {
    fun informationConceptCreate(): InformationConceptCreateFunction
    fun informationConceptUpdate(): InformationConceptUpdateFunction
}

interface InformationConceptQueryApi {
    fun informationConceptGetByIdentifier(): InformationConceptGetByIdentifierFunction
    fun informationConceptList(): InformationConceptListFunction
    fun informationConceptGetGlobalValue(): InformationConceptGetGlobalValueFunction
}
