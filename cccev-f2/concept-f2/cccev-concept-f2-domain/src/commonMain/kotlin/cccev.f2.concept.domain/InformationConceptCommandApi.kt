package cccev.f2.concept.domain

import cccev.f2.concept.domain.command.InformationConceptCreateFunction
import cccev.f2.concept.domain.command.InformationConceptUpdateFunction

interface InformationConceptCommandApi {
    fun conceptCreate(): InformationConceptCreateFunction
    fun conceptUpdate(): InformationConceptUpdateFunction
}
