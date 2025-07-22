package cccev.dsl.client

import cccev.f2.certification.client.CertificationClient
import cccev.f2.certification.client.certificationClient
import cccev.f2.concept.client.InformationConceptClient
import cccev.f2.concept.client.informationConceptClient
import cccev.f2.evidence.type.client.EvidenceTypeClient
import cccev.f2.evidence.type.client.evidenceTypeClient
import cccev.f2.unit.client.DataUnitClient
import cccev.f2.unit.client.dataUnitClient
import cccev.s2.requirement.client.RequirementClient
import cccev.s2.requirement.client.requirementClient
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.client.ktor.http.F2ClientConfigLambda
import kotlinx.serialization.json.Json

class CCCEVClient(
    val evidenceTypeClient: EvidenceTypeClient,
    val informationConceptClient: InformationConceptClient,
    val certificationClient: CertificationClient,
    val requirementClient: RequirementClient,
    val dataUnitClient: DataUnitClient,
    val graphClient: CCCEVGraphClient
) {
    companion object {
        suspend operator fun invoke(
            url: String,
            json: Json? = null,
            config: F2ClientConfigLambda? = null
        ): CCCEVClient {
            val f2Client = F2ClientBuilder.get(url, json, config = config)
            val evidenceTypeClient = f2Client.evidenceTypeClient().invoke()
            val informationConceptClient = f2Client.informationConceptClient().invoke()
            val certificationClient =  f2Client.certificationClient().invoke()
            val requirementClient = f2Client.requirementClient().invoke()
            val dataUnitClient = f2Client.dataUnitClient().invoke()
            return CCCEVClient(
                evidenceTypeClient = evidenceTypeClient,
                informationConceptClient = informationConceptClient,
                certificationClient = certificationClient,
                requirementClient = requirementClient,
                dataUnitClient = dataUnitClient,
                CCCEVGraphClient(evidenceTypeClient = evidenceTypeClient,
                    informationConceptClient = informationConceptClient,
                    requirementClient = requirementClient,
                    dataUnitClient = dataUnitClient,
                )
            )
        }
    }

}
