import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.InformationRequirement
import cccev.dsl.model.Requirement
import cee.baten101.BAT_EN_101
import cee.indba116.IND_BA_116
import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic

class CeeTest {

//    @Test
    fun baten101() {
        val mapper = jacksonObjectMapper().setSerializationInclusion(JsonInclude.Include.NON_EMPTY).writerWithDefaultPrettyPrinter()

        println(mapper.writeValueAsString(BAT_EN_101))
    }

//    @Test
    fun indba116() {
        val mapper = jacksonObjectMapper().setSerializationInclusion(JsonInclude.Include.NON_EMPTY).writerWithDefaultPrettyPrinter()

        println(mapper.writeValueAsString(IND_BA_116))
    }



//    @Test
    fun createBaten101() = runBlocking {
        val mapper = jacksonObjectMapper().setSerializationInclusion(JsonInclude.Include.NON_EMPTY).writerWithDefaultPrettyPrinter()

        val url = "https://api.registry.smartb.network/cccev"
        val client = CCCEVClient(url)
//        client.createGraph(
//            flowOf(BAT_EN_101)
//        ).onEach {
//            println("Created requirement: ${it.identifier}")
//        }.collect()

    }

//    @Test
    fun tt() = runBlocking {
        val json = Json {
            explicitNulls = false
            serializersModule = SerializersModule {
                classDiscriminator = "class"
                polymorphic(Requirement::class) {
                    subclass(InformationRequirement::class, InformationRequirement.serializer())
                    defaultDeserializer { InformationRequirement.serializer() }
                }
            }
        }
        val r: Requirement = json.decodeFromString(ex)

        val url = "https://api.registry.smartb.network/cccev"
        val client = CCCEVClient(url)
        client.graphClient.create(
            flowOf(r)
        ).onEach {
            println("Created requirement: ${it.identifier}")
        }.collect()
    }

    val ex = """
        {
        	"identifier": "BAT-TH-104",
        	"name": "Robinet thermostatique",
        	"hasRequirement": [{
        			"description": "Le secteur d'application de la fiche.",
        			"identifier": "secteurApplication",
        			"name": "Secteur d'application"
        		},
        		{
        			"description": "Mise en place de robinets thermostatiques sur des radiateurs existants raccordés à un système de chauffage central à combustible avec chaudière existante.",
        			"identifier": "denomination",
        			"name": "Dénomination"
        		},
        		{
        			"description": "La liste des critères à valider",
        			"identifier": "conditionsDelivranceCertificats",
        			"name": "Conditions pour la délivrance de certificats"
        		},
        		{
        			"description": "Durée de vie conventionnelle",
        			"identifier": "dureeVieConventionnelle",
        			"name": "Durée de vie conventionnelle"
        		},
        		{
        			"description": "Montant de certificats en kWh cumac",
        			"identifier": "montantCertificatsCumac",
        			"name": "Montant de certificats en kWh cumac",
        			"hasRequirement": [{
        				"description": "Surface Facteur Montant unitaire en kWh cumac/m² chauffée Secteur d'activité",
        				"identifier": "calculCertificatsCumac",
        				"name": "Montant de certificats en kWh cumac",
        				"hasConcept": [{
        						"identifier": "kWhCumac",
        						"name": "kWh Cumac",
        						"unit": {
        							"identifier": "kWhCumac",
        							"name": "Kilowatt-Heure CUMAC",
        							"description": "kilowatt-heures cumulés et actualisés",
        							"notation": "kWh Cumac",
        							"type": "number"
        						},
        						"description": "kWh Cumac"
        					},
        					{
        						"identifier": "surfaceFacteur",
        						"name": "Surface Facteur",
        						"unit": {
        							"identifier": "kwhPerSquareMeter",
        							"name": "Killowatt-heure Cumac par mètre carré",
        							"description": "Killowatt-heure Cumac par mètre carré",
        							"notation": "kWh Cumac/m²",
        							"type": "number"
        						},
        						"description": "Montant en kWh/m2 en fonction du secteur d'activité",
        						"expressionOfExpectedValue": "{Bureaux: 1,Enseignement: 0.8, Santé: 1, Commerces: 0.9, 'Hôtellerie/Restauration': 1.3, Autres: 0.8 }.get(secteurActivite)",
        						"dependsOn": [
        							"secteurActivite"
        						]
        					},
        					{
        						"identifier": "surfaceChauffee",
        						"name": "Surface chauffée",
        						"unit": {
        							"identifier": "squareMeter",
        							"name": "Mètre carré",
        							"description": "Mètre carré",
        							"notation": "m²",
        							"type": "number"
        						},
        						"description": "Surface du bâtiment, chauffée par les radiateurs nouvellement équipés de robinets thermostatiques (m²)"
        					}
        				]
        			}]
        		}
        	]
        }
    """.trimIndent()


}