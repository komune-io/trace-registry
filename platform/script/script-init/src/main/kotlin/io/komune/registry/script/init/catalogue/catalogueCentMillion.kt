@file:Suppress("LongMethod", "FunctionNaming", "LargeClass")
package io.komune.registry.script.init.catalogue

import io.komune.registry.dsl.dcat.domain.model.LicenseDocument
import io.komune.registry.dsl.dcat.domain.model.LicenseDocumentBuilder
import io.komune.registry.dsl.dcat.domain.model.catalogue
import io.komune.registry.dsl.dcat.domain.model.license
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptBuilder
import io.komune.registry.dsl.skos.domain.model.concept
import io.komune.registry.dsl.skos.domain.model.conceptScheme
import io.komune.registry.s2.structure.domain.model.Structure

const val IMG_SOLUTION = "100m/solution.png"
const val IMG_SYSTEM = "100m/system.png"
const val IMG_USECASE = "100m/usecase.png"
const val IMG_SECTEUR = "100m/secteur.png"

fun catalogueCentMillion(debug: String) = catalogue {
    identifier = "objectif100m${debug}"
    type = "100m"
    structure = Structure("grid")
    translation("fr") {
        title = "Objectif 100m"
        description = """
            Ensemble, allégeons les entreprises de 100 millions de tonnes de CO2, d'ici 2030
        """.trimIndent()
    }
    translation("en") {
        title = "Objective 100m"
        description = """
            Together, let's reduce companies' CO2 emissions by 100 million tonnes by 2030
        """.trimIndent()
    }
    translation("es") {
        title = "Objetivo 100m"
        description = """
            Juntos, reduzcamos las emisiones de CO2 de las empresas en 100 millones de toneladas para 2030
        """.trimIndent()
    }

    +Secteur(debug)
    +Systeme(debug)
    +Solution(debug)
    +EtudeDeCas(debug)
}

val schemeCentMillion = conceptScheme {
    id = "100m-solution-categories"
    concepts = CentMThemes.allConcepts
}

val licensesCentMillion = CentMLicenses.allLicenses

fun Solution(debug: String) = catalogue {
    identifier = "objectif100m-Solution${debug}"
    type = "100m-solutions"
    structure = Structure("item")
    img = getImg(IMG_SOLUTION)
    translation("fr") {
        title = "Solutions"
        description = """
            Le coeur du système est la Solution
        """.trimIndent()
    }
    translation("en") {
        title = "Solutions"
        description = """
            The heart of the system is the Solution
        """.trimIndent()
    }
    translation("es") {
        title = "Soluciones"
        description = """
            El corazón del sistema es la Solución
        """.trimIndent()
    }
}

fun Systeme(debug: String) = catalogue {
    identifier = "100m-systems${debug}"
    type = "100m-systems"
    structure = Structure("grid")
    img = getImg(IMG_SYSTEM)
    translation("fr") {
        title = "Systèmes"
        description = """
            Les Technologies sont des parties de l’activité d’une entreprise où il est possible de présenter de l’information, puis
            d’évaluer les Solutions possibles.
        """.trimIndent()
    }
    translation("en") {
        title = "Systems"
        description = """
            Technologies are parts of a company's activity where it is possible to present information, then
            to evaluate possible Solutions.
        """.trimIndent()
    }
    translation("es") {
        title = "Sistemas"
        description = """
            Las Tecnologías son partes de la actividad de una empresa donde es posible presentar información, luego
            evaluar posibles Soluciones.
        """.trimIndent()
    }

    +CentMSystem.Utilites(debug)
    +CentMSystem.TechnologiesEnergetiques(debug)
    +CentMSystem.Procedes(debug)
    +CentMSystem.NouvellesEnergies(debug)
    +CentMSystem.Management(debug)
    +CentMSystem.Eau(debug)
    +CentMSystem.Dechets(debug)
    +CentMSystem.Cogeneration(debug)
    +CentMSystem.Batiment(debug)
}

fun EtudeDeCas(debug: String) = catalogue {
    identifier = "objectif100m-EtudeDeCas${debug}"
    type = "100m-projects"
    structure = Structure("item")
    img = getImg(IMG_USECASE)
    translation("fr") {
        title = "Etudes de cas"
        description = """
            Une Etude de cas est un cas d’application des Solutions dans des entreprises.
        """.trimIndent()
    }
    translation("en") {
        title = "Use cases"
        description = """
            A Use case is a case of application of Solutions in companies.
        """.trimIndent()
    }
    translation("es") {
        title = "Casos de uso"
        description = """
            Un caso de uso es un caso de aplicación de Soluciones en empresas.
        """.trimIndent()
    }
}

fun Secteur(debug: String) = catalogue {
    identifier = "100m-sectors${debug}"
    type = "100m-sectors"
    structure = Structure("grid")
    img = getImg(IMG_SECTEUR)
    translation("fr") {
        title = "Secteurs"
        description = """
             Ce sont les Secteurs économiques qui regroupent toutes les activités possibles des entreprises.
        """.trimIndent()
    }
    translation("en") {
        title = "Sectors"
        description = """
            These are the Economic Sectors that group together all the possible activities of companies.
        """.trimIndent()
    }
    translation("es") {
        title = "Sectores"
        description = """
            Estos son los Sectores Económicos que agrupan todas las posibles actividades de las empresas.
        """.trimIndent()
    }

    +CentMSecteur.AgricultureBois(debug)
    +CentMSecteur.AgroAlimentaire(debug)
    +CentMSecteur.Chimie(debug)
    +CentMSecteur.Industrie(debug)
    +CentMSecteur.IndustrieLourde(debug)
    +CentMSecteur.TertiaireBatiment(debug)
    +CentMSecteur.Utilities(debug)
}

object CentMThemes {
    val allConcepts = mutableListOf<SkosConcept>()

    private fun addConcept(block: SkosConceptBuilder.() -> Unit): SkosConcept {
        return concept(block).also(allConcepts::add)
    }

    val Behaviour = addConcept {
        id = "objectif100m-category-behaviour"
        prefLabels = mutableMapOf(
            "fr" to "Comportementale",
            "en" to "Behaviour",
            "es" to "Comportamiento"
        )
    }

    val Operation = addConcept {
        id = "objectif100m-category-operation"
        prefLabels = mutableMapOf(
            "fr" to "Exploitation",
            "en" to "Operational",
            "es" to "Explotación"
        )
    }

    val Investment = addConcept {
        id = "objectif100m-category-investment"
        prefLabels = mutableMapOf(
            "fr" to "Investissement",
            "en" to "Investment",
            "es" to "Inversión"
        )
    }
}

object CentMLicenses {
    val allLicenses = mutableListOf<LicenseDocument>()

    private fun addLicense(block: LicenseDocumentBuilder.() -> Unit): LicenseDocument {
        return license(block).also(allLicenses::add)
    }

    val CreativeCommons = addLicense {
        identifier = "creative-commons"
        name = "Creative Commons"
        url = "https://creativecommons.org/licenses/by/4.0/"
    }

    val Odbl = addLicense {
        identifier = "odbl"
        name = "Open Database License"
        url = "https://opendatacommons.org/licenses/odbl/1.0/"
    }
}

object CentMSecteur {
    fun AgricultureBois(debug: String) = catalogue {
        identifier = "sector-2${debug}"
        type = "100m-sector"
        img = getImg(IMG_SECTEUR)
        structure = Structure("item")

        translation("fr") {
            title = "Agriculture & Bois"
            description = """
                Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, la viticulture, 
                l'arboriculture et les cultures sous serres chauffées.
            """.trimIndent()
        }
        translation("en") {
            title = "Agriculture & Wood"
            description = """
                The agriculture sector includes large crops, milk production, 
                beef production, pig, poultry and rabbit farming, viticulture, 
                arboriculture and crops under heated greenhouses.
            """.trimIndent()
        }
        translation("es") {
            title = "Agricultura y Madera"
            description = """
                El sector agrícola incluye grandes cultivos, producción de leche, 
                producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                arboricultura y cultivos en invernaderos calefactados.
            """.trimIndent()
        }

        catalogues {
            catalogue {
                identifier = "sector-3${debug}"
                type = "100m-sector"
                img = getImg(IMG_SECTEUR)
                structure = Structure("item")

                translation("fr") {
                    title = "Bois"
                    description = """
                        Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                        la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                        la viticulture, l'arboriculture et les cultures sous serres chauffées.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Wood"
                    description = """
                        The agriculture sector includes large crops, milk production, 
                        beef production, pig, poultry and rabbit farming, viticulture, 
                        arboriculture and crops under heated greenhouses.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Madera"
                    description = """
                        El sector agrícola incluye grandes cultivos, producción de leche, 
                        producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                        arboricultura y cultivos en invernaderos calefactados.
                    """.trimIndent()
                }
            }

            catalogue {
                identifier = "100m-sectors-AgricultureBois-Bois-EtudeDeCas${debug}"
                type = "100m-project"
                structure = Structure("item")
                img = getImg(IMG_USECASE)

                translation("fr") {
                    title = "Etude de cas"
                    description = """
                        Une Etude de cas est un cas d’application des Solutions dans des entreprises.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Use case"
                    description = """
                        A Use case is a case of application of Solutions in companies.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Caso de uso"
                    description = """
                        Un caso de uso es un caso de aplicación de Soluciones en empresas.
                    """.trimIndent()
                }

                catalogues {
                    catalogue {
                        identifier = "E-84${debug}"
                        type = "100m-project"
                        structure = Structure("item")
                        img = getImg(IMG_USECASE)
                        translation("fr") {
                            title = "Etude de cas 84"
                            description = """
                                Etude de cas basée sur la source publique :  CDC Climat
                            """.trimIndent()
                        }
                        translation("en") {
                            title = "Use case 84"
                            description = """
                                Use case based on the public source: CDC Climat
                            """.trimIndent()
                        }
                        translation("es") {
                            title = "Caso de uso 84"
                            description = """
                                Caso de uso basado en la fuente pública: CDC Climat
                            """.trimIndent()
                        }
                    }
                }
            }

            catalogue {
                identifier = "sector-4${debug}"
                type = "100m-sector"
                img = getImg(IMG_SECTEUR)
                structure = Structure("item")

                translation("fr") {
                    title = "Culture"
                    description = """
                        Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                        la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                        la viticulture, l'arboriculture et les cultures sous serres chauffées.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Culture"
                    description = """
                        The agriculture sector includes large crops, milk production, 
                        beef production, pig, poultry and rabbit farming, viticulture, 
                        arboriculture and crops under heated greenhouses.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Cultura"
                    description = """
                        El sector agrícola incluye grandes cultivos, producción de leche, 
                        producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                        arboricultura y cultivos en invernaderos calefactados.
                    """.trimIndent()
                }
            }

            catalogue {
                identifier = "sector-5${debug}"
                type = "100m-sector"
                img = getImg(IMG_SECTEUR)
                structure = Structure("item")

                translation("fr") {
                    title = "Elevage"
                    description = """
                        Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                        la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                        la viticulture, l'arboriculture et les cultures sous serres chauffées.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Breeding"
                    description = """
                        The agriculture sector includes large crops, milk production, 
                        beef production, pig, poultry and rabbit farming, viticulture, 
                        arboriculture and crops under heated greenhouses.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Crianza"
                    description = """
                        El sector agrícola incluye grandes cultivos, producción de leche, 
                        producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                        arboricultura y cultivos en invernaderos calefactados.
                    """.trimIndent()
                }
            }

            catalogue {
                identifier = "sector-6${debug}"
                type = "100m-sector"
                img = getImg(IMG_SECTEUR)
                structure = Structure("item")

                translation("fr") {
                    title = "Matériel agricole"
                    description = """
                        Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                        la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                        la viticulture, l'arboriculture et les cultures sous serres chauffées.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Agricultural equipment"
                    description = """
                        The agriculture sector includes large crops, milk production, 
                        beef production, pig, poultry and rabbit farming, viticulture, 
                        arboriculture and crops under heated greenhouses.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Equipo agrícola"
                    description = """
                        El sector agrícola incluye grandes cultivos, producción de leche, 
                        producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                        arboricultura y cultivos en invernaderos calefactados.
                    """.trimIndent()
                }
            }

            catalogue {
                identifier = "sector-7${debug}"
                type = "100m-sector"
                img = getImg(IMG_SECTEUR)
                structure = Structure("item")

                translation("fr") {
                    title = "Séchage"
                    description = """
                        Après la récolte, les grains (blé, maïs, protéagineux, oléagineux…) 
                        sont conditionnés puis stockés en silo avant d’être acheminés jusqu'à l’acheteur. 
                        Ce conditionnement est nécessaire pour la bonne conservation des grains. 
                        Il s’agit de diminuer leur taux d’humidité (par séchage) et leur température (par ventilation) 
                        afin d’éviter tout risque de moisissures, d’échauffement et de développement d'insectes. 
                        Le séchage agricole est donc une étape essentielle pour la conservation des récoltes, 
                        dans le respect des normes sanitaires.
                        
                        Le séchage peut être fait directement à la ferme (séchoirs agricoles) 
                        ou sur le site d’un organisme stockeur (séchoirs industriels). Selon le cas, 
                        les caractéristiques et les capacités des séchoirs seront différentes.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Drying"
                    description = """
                        After harvest, grains (wheat, corn, protein crops, oilseeds…) 
                        are conditioned and then stored in silos before being transported to the buyer. 
                        This conditioning is necessary for the good conservation of the grains. 
                        It is necessary to reduce their moisture content (by drying) and their temperature (by ventilation) 
                        in order to avoid any risk of mold, heating and insect development. 
                        Agricultural drying is therefore an essential step for the conservation of crops, 
                        in compliance with health standards.
                        
                        Drying can be done directly on the farm (agricultural dryers) 
                        or on the site of a storage organization (industrial dryers). Depending on the case, 
                        the characteristics and capacities of the dryers will be different.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Secado"
                    description = """
                        Después de la cosecha, los granos (trigo, maíz, cultivos proteicos, oleaginosas…) 
                        se acondicionan y luego se almacenan en silos antes de ser transportados al comprador.
                        Este acondicionamiento es necesario para la buena conservación de los granos.
                        Es necesario reducir su contenido de humedad (mediante secado) y su temperatura (mediante ventilación)
                        para evitar cualquier riesgo de moho, calentamiento y desarrollo de insectos.
                        El secado agrícola es, por lo tanto, un paso esencial para la conservación de los cultivos,
                        cumpliendo con las normas sanitarias.
                        
                        El secado se puede hacer directamente en la granja (secadores agrícolas)
                        o en el sitio de una organización de almacenamiento (secadores industriales).
                        Dependiendo del caso, las características y capacidades de los secadores serán diferentes.
                    """.trimIndent()
                }
            }

            catalogue {
                identifier = "sector-8${debug}"
                type = "100m-sector"
                img = getImg(IMG_SECTEUR)
                structure = Structure("item")
                translation("fr") {
                    title = "Serres"
                    description = """
                        Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                        la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                        la viticulture, l'arboriculture et les cultures sous serres chauffées.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Greenhouses"
                    description = """
                        The agriculture sector includes large crops, milk production, 
                        beef production, pig, poultry and rabbit farming, viticulture, 
                        arboriculture and crops under heated greenhouses.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Invernaderos"
                    description = """
                        El sector agrícola incluye grandes cultivos, producción de leche, 
                        producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                        arboricultura y cultivos en invernaderos calefactados.
                    """.trimIndent()
                }
            }
        }
    }

    fun AgroAlimentaire(debug: String) = catalogue {
        identifier = "sector-9${debug}"
        type = "100m-sector"
        img = getImg(IMG_SECTEUR)
        structure = Structure("item")

        translation("fr") {
            title = "Agro-alimentaire"
            description = """
               L'industrie agro-alimentaire est le secteur où les matières premières issues de l'agriculture, 
               de l'élevage, de l'arboriculture, de la pêche sont transformées 
               en produits alimentaires destinés à la consommation.
            """.trimIndent()
        }
        translation("en") {
            title = "Agro-food"
            description = """
                The agri-food industry is the sector where raw materials from agriculture, 
                livestock, arboriculture, fishing are transformed 
                into food products intended for consumption.
            """.trimIndent()
        }
        translation("es") {
            title = "Agroalimentario"
            description = """
                La industria agroalimentaria es el sector donde las materias primas de la agricultura, 
                la ganadería, la arboricultura, la pesca se transforman 
                en productos alimenticios destinados al consumo.
            """.trimIndent()
        }
    }

    fun Chimie(debug: String) = catalogue {
        identifier = "sector-18${debug}"
        type = "100m-sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        translation("fr") {
            title = "Chimie"
            description = """
                Le secteur de la chimie comprend la chimie minérale, la chimie organique, la chimie fine pharmaceutique, 
                les spécialités chimiques (peintures, huiles, colles...), produits de beautés et produits d'entretien.
            """.trimIndent()
        }
        translation("en") {
            title = "Chemistry"
            description = """
                The chemistry sector includes mineral chemistry, organic chemistry, fine pharmaceutical chemistry, 
                chemical specialties (paints, oils, glues...), beauty products and cleaning products.
            """.trimIndent()
        }
        translation("es") {
            title = "Química"
            description = """
                El sector de la química incluye la química mineral, la química orgánica, la química fina farmacéutica, 
                especialidades químicas (pinturas, aceites, pegamentos...), productos de belleza y productos de limpieza.
            """.trimIndent()
        }
    }

    fun Industrie(debug: String) = catalogue {
        identifier = "sector-33${debug}"
        type = "100m-sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        translation("fr") {
            title = "Industrie"
            description = """
                Le secteur de l'industrie comprend l'automobile, l'aéronautique, les céramiques, le caoutchouc, 
                l'électronique, la mécanique et la fonderie, la papeterie, le textile et la plasturgie.
            """.trimIndent()
        }
        translation("en") {
            title = "Industry"
            description = """
                The industry sector includes automotive, aeronautics, ceramics, rubber, 
                electronics, mechanics and foundry, paper, textiles and plastics.
            """.trimIndent()
        }
        translation("es") {
            title = "Industria"
            description = """
                El sector industrial incluye automoción, aeronáutica, cerámica, caucho, 
                electrónica, mecánica y fundición, papel, textiles y plásticos.
            """.trimIndent()
        }
    }

    fun IndustrieLourde(debug: String) = catalogue {
        identifier = "sector-21${debug}"
        type = "100m-sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        translation("fr") {
            title = "Industrie Lourde"
            description = """
                Le secteur de l'industrie lourde comprend les secteurs du ciment, de la chaux, des hydrocarbures, 
                des matériaux non-ferreux, des mines et des carrières, du raffinage, de la sidérurgie et du verre.
            """.trimIndent()
        }
        translation("en") {
            title = "Heavy Industry"
            description = """
                The heavy industry sector includes cement, lime, hydrocarbons, 
                non-ferrous materials, mining and quarries, refining, steel and glass.
            """.trimIndent()
        }
        translation("es") {
            title = "Industria Pesada"
            description = """
                El sector de la industria pesada incluye cemento, cal, hidrocarburos, 
                materiales no ferrosos, minería y canteras, refinación, acero y vidrio.
            """.trimIndent()
        }
    }

    fun TertiaireBatiment(debug: String) = catalogue {
        identifier = "sector-50${debug}"
        type = "100m-sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        translation("fr") {
            title = "Tertiaire et bâtiment"
            description = """
                Le secteur tertiaire concerne les bâtiments qui abritent des commerces, des administrations, 
                des activités financières et immobilières ou encore des services aux entreprises et aux particuliers.
                Le secteur résidentiel désigne les bâtiments uniquement réservés à l'habitation.
            """.trimIndent()
        }
        translation("en") {
            title = "Tertiary and building"
            description = """
                The tertiary sector concerns buildings that house shops, administrations, 
                financial and real estate activities or services to businesses and individuals.
                The residential sector refers to buildings reserved exclusively for housing.
            """.trimIndent()
        }
        translation("es") {
            title = "Terciario y edificio"
            description = """
                El sector terciario se refiere a edificios que albergan tiendas, administraciones, 
                actividades financieras e inmobiliarias o servicios a empresas y particulares.
                El sector residencial se refiere a edificios reservados exclusivamente para viviendas.
            """.trimIndent()
        }
    }

    fun Utilities(debug: String) = catalogue {
        identifier = "sector-44${debug}"
        type = "100m-sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        translation("fr") {
            title = "Utilities"
            description = """
                Le secteur des "utilities" regroupe les activités de Bâtiment et Travaux Publics, 
                de traitement des déchets, d'assainissement de l'eau, de transport et logistique et de production d'énergie.
            """.trimIndent()
        }
        translation("en") {
            title = "Utilities"
            description = """
                The "utilities" sector includes Building and Public Works activities, 
                waste treatment, water sanitation, transport and logistics and energy production.
            """.trimIndent()
        }
        translation("es") {
            title = "Utilities"
            description = """
                El sector de "utilities" incluye actividades de Construcción y Obras Públicas, 
                tratamiento de residuos, saneamiento del agua, transporte y logística y producción de energía.
            """.trimIndent()
        }
    }
}

object CentMSystem {
    fun Batiment(debug: String) = catalogue {
        identifier = "system-5${debug}"
        type = "100m-system"
        img = getImg(IMG_SYSTEM)
        structure = Structure("item")

        translation("fr") {
            title = "Bâtiment"
            description = """
                Un bâtiment a pour but d'isoler un espace afin de créer des conditions propres à une activité. 
                Il est constitué d'une enveloppe et d'équipements consommateurs permettant d'assurer une 
                atmosphère conditionnée. La structure et l'aménagement du bâtiment sont liés à son usage.
            """.trimIndent()
        }
        translation("en") {
            title = "Building"
            description = """
                A building is to isolate an area to create activity-specific conditions. 
                It consists of an envelope and consumer equipment to ensure a conditioned atmosphere. 
                The structure and layout of the building are related to its use.
            """.trimIndent()
        }
        translation("es") {
            title = "Edificio"
            description = """
                Un edificio sirve para aislar una zona y crear unas condiciones específicas para cada actividad. 
                Consta de una envolvente y equipos consumidores para garantizar una atmósfera acondicionada. 
                La estructura y disposición del edificio están relacionadas con su uso.
            """.trimIndent()
        }
    }

    fun Cogeneration(debug: String) = catalogue {
        identifier = "system-31${debug}"
        type = "100m-system"
        img = getImg(IMG_SYSTEM)
        structure = Structure("item")

        translation("fr") {
            title = "Cogénération"
            description = """
                La cogénération consiste en la production simultanée de chaleur et d'énergie électrique
                (en anglais CHP, Combined Heat and Power). La chaleur habituellement perdue de certaines 
                installations peut être récupérée pour générer de l'électricité. 
                Selon la quantité de chaleur disponible et les niveaux de chaleur, plusieurs technologies 
                peuvent être appliquées telles que les ORC, les moteurs à combustion interne, les moteurs Stirling, 
                les cycles à vapeur...
            """.trimIndent()
        }
        translation("en") {
            title = "Cogeneration"
            description = """
                Combined heat and power (CHP) is the simultaneous production of heat and electrical energy.
                (CHP, Combined Heat and Power). The heat usually lost from certain installations can be 
                can be recovered to generate electricity. 
                Depending on the amount of heat available and the heat levels required, several technologies 
                technologies can be applied, such as ORC, internal combustion engines, Stirling engines 
                steam cycles...
            """.trimIndent()
        }
        translation("es") {
            title = "Cogeneración"
            description = """
                La cogeneración es la producción simultánea de calor y energía eléctrica.
                (CHP son las siglas de Combined Heat and Power). El calor que suelen perder algunas instalaciones puede 
                puede recuperarse para generar electricidad. 
                En función de la cantidad de calor disponible y de los niveles de calor requeridos, pueden aplicarse varias tecnologías 
                tecnologías pueden aplicarse, como ORC, motores de combustión interna, motores Stirling 
                ciclos de vapor, etc.
            """.trimIndent()
        }
    }

    fun Dechets(debug: String) = catalogue {
        identifier = "system-49${debug}"
        type = "100m-system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        translation("fr") {
            title = "Déchets"
            description = """
                Le gestion des déchets est assez difficile à gérer du fait de l'hétérogénéité des matières. 
                Les sociétés actuelles tendent vers une économie circulaire en terme de déchets.
            """.trimIndent()
        }
        translation("en") {
            title = "Waste"
            description = """
                Waste management is quite difficult because of the heterogeneity of the materials involved. 
                Today's societies are moving towards a circular economy in terms of waste.
            """.trimIndent()
        }
        translation("es") {
            title = "Residuos"
            description = """
                La gestión de residuos es bastante difícil debido a la heterogeneidad de los materiales. 
                Las sociedades actuales avanzan hacia una economía circular en materia de residuos.
            """.trimIndent()
        }
    }

    fun Eau(debug: String) = catalogue {
        identifier = "system-27${debug}"
        type = "100m-system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        translation("fr") {
            title = "Eau"
            description = """
                La technologie de l'eau regroupe l'eau chaude sanitaire, 
                l'eau utilisée pour les procédés industriels et l'assainissement de l'eau.
            """.trimIndent()
        }
        translation("en") {
            title = "Water"
            description = """
                Water technology covers domestic hot water, 
                water used for industrial processes and water purification.
            """.trimIndent()
        }
        translation("es") {
            title = "Agua"
            description = """
                La tecnología del agua abarca el agua caliente sanitaria 
                el agua utilizada en procesos industriales y la depuración del agua.
            """.trimIndent()
        }
    }

    fun Management(debug: String) = catalogue {
        identifier = "system-2${debug}"
        type = "100m-system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        translation("fr") {
            title = "Management (ISO 50 001)"
            description = """
                Le management de l'énergie est illustré par l'ISO 50001 qui permet de mettre en place un 
                Système de Management de l'Energie (SMEn) afin de développer une gestion méthodique de l'énergie.
                Le SMEn repose sur la boucle d'amélioration continue Plan-Do-Check-Act (PDCA), 
                bien connue pour la qualité (ISO 9001) et l'environnement (ISO 14001).
            """.trimIndent()
        }
        translation("en") {
            title = "Management (ISO 50 001)"
            description = """
                Energy management is illustrated by ISO 50001, which enables the implementation of an Energy Management System (EMS) to develop a methodical approach to energy management. 
                Energy Management System (EMSn) to develop a methodical approach to energy management.
                The EMSn is based on the Plan-Do-Check-Act (PDCA) continuous improvement loop, 
                well-known for quality (ISO 9001) and the environment (ISO 14001).
            """.trimIndent()
        }
        translation("es") {
            title = "Gestión (ISO 50 001)"
            description = """
                La gestión de la energía se ilustra mediante la norma ISO 50001, que permite establecer un Sistema de Gestión de la Energía (SGE) para desarrollar una gestión metódica de la energía. 
                Sistema de Gestión Energética (SGE) para desarrollar una gestión metódica de la energía.
                El SGE se basa en el bucle de mejora continua Planificar-Hacer-Verificar-Actuar (PDCA), 
                conocido para la calidad (ISO 9001) y el medio ambiente (ISO 14001).
            """.trimIndent()
        }
    }

    fun NouvellesEnergies(debug: String) = catalogue {
        identifier = "system-36${debug}"
        type = "100m-system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        translation("fr") {
            title = "Nouvelles énergies"
            description = """
                Les nouvelles énergies regroupent les sources d'énergies durables telles que les biocarburants, 
                la biomasse solide, l'éolien, la géothermie, la gazéification, l'hydraulique, l'hydrogène,
                la méthanisation et l'énergie solaire (photovoltaïque et thermique).
            """.trimIndent()
        }
        translation("en") {
            title = "New energies"
            description = """
                New energies include sustainable energy sources such as biofuels, 
                solid biomass, wind power, geothermal energy, gasification, hydraulics and hydrogen,
                methanization and solar energy (photovoltaic and thermal).
            """.trimIndent()
        }
        translation("es") {
            title = "Nuevas energías"
            description = """
                Las nuevas energías incluyen fuentes de energía sostenibles como los biocombustibles 
                la biomasa sólida, la energía eólica, la energía geotérmica, la gasificación, la energía hidroeléctrica y el hidrógeno,
                la metanización y la energía solar (fotovoltaica y térmica).
            """.trimIndent()
        }
    }

    fun Procedes(debug: String) = catalogue {
        identifier = "system-19${debug}"
        type = "100m-system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        translation("fr") {
            title = "Procédés"
            description = """
                Sur un site industriel, les procédés regroupent les lignes de production et les unités 
                de fabrication d'un produit donné. Certains procédés sont génériques et peuvent être utilisés 
                dans la fabrication de nombreux types de produits. C'est le cas des fours par exemple. 
                D'autres, comme les lignes d'assemblage, sont conçus de manière ad hoc 
                selon les besoins correspondant au produit fabriqué par l'entreprise.
            """.trimIndent()
        }
        translation("en") {
            title = "Processes"
            description = """
                On an industrial site, processes group together the production lines and manufacturing units for a given product. 
                for a given product. Some processes are generic, and can be used 
                in the manufacture of many different types of product. This is the case with furnaces, for example. 
                Others, such as assembly lines, are designed on an ad hoc basis 
                according to the needs of the product manufactured by the company.
            """.trimIndent()
        }
        translation("es") {
            title = "Procesos"
            description = """
                En una planta industrial, los procesos agrupan las líneas de producción y las unidades de fabricación de un producto determinado. 
                fabricación de un producto determinado. Algunos procesos son genéricos y pueden utilizarse 
                en la fabricación de muchos tipos de productos diferentes. Es el caso, por ejemplo, de los hornos. 
                Otros, como las cadenas de montaje, se diseñan ad hoc 
                en función de las necesidades del producto fabricado por la empresa.
            """.trimIndent()
        }
    }

    fun TechnologiesEnergetiques(debug: String) = catalogue {
        identifier = "system-47${debug}"
        type = "100m-system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        translation("fr") {
            title = "Technologies énergétiques"
            description = """
                Le groupe des technologies énergétiques regroupe les technologies de la capture et du stockage de CO2, 
                les réseaux de chaleur, les smart grids, les smart meters, le stockage d'énergie et les transports.
            """.trimIndent()
        }
        translation("en") {
            title = "Energy technologies"
            description = """
                The energy technologies group includes technologies for CO2 capture and storage, 
                heating networks, smart grids, smart meters, energy storage and transport.
            """.trimIndent()
        }
        translation("es") {
            title = "Tecnologías energéticas"
            description = """
                El grupo de tecnologías energéticas abarca las tecnologías de captura y almacenamiento de CO2, 
                redes de calefacción, redes inteligentes, contadores inteligentes, almacenamiento de energía y transporte.
            """.trimIndent()
        }
    }

    fun Utilites(debug: String) = catalogue {
        identifier = "system-10${debug}"
        type = "100m-system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        translation("fr") {
            title = "Utilités"
            description = """
                Les utilités sont définies comme étant des systèmes servant en parallèle à plusieurs unités de production. 
                L'air comprimé, la production de froid, la distribution électrique, les systèmes motorisés, la ventilation industrielle, 
                les stations de pompage, la production de vapeur, d'eau chaude et les réseaux associés font partie des utilités.
            """.trimIndent()
        }
        translation("en") {
            title = "Utilities"
            description = """
                Utilities are defined as systems serving in parallel to several production units. 
                Compressed air, cold production, electrical distribution, motorized systems, industrial ventilation, 
                pumping stations, steam production, hot water and associated networks are part of utilities.
            """.trimIndent()
        }
        translation("es") {
            title = "Utilidades"
            description = """
                Las utilidades se definen como sistemas que sirven en paralelo a varias unidades de producción. 
                El aire comprimido, la producción de frío, la distribución eléctrica, los sistemas motorizados, la ventilación industrial, 
                las estaciones de bombeo, la producción de vapor, agua caliente y las redes asociadas forman parte de las utilidades.
            """.trimIndent()
        }

        catalogues {
            catalogue {
                identifier = "system-15${debug}"
                type = "100m-system"
                structure = Structure("item")
                img = getImg(IMG_SYSTEM)

                translation("fr") {
                    title = "Moteur"
                    description = """
                        Un moteur électrique est un dispositif permettant de convertir de l'énergie électrique en énergie mécanique.
                        Afin de réduire la consommation des moteurs électriques, il est recommandé d'optimiser ces systèmes par des moteurs 
                        performants et des systèmes de pilotage tel que la variation électronique de vitesse.
                    """.trimIndent()
                }
                translation("en") {
                    title = "Engine"
                    description = """
                        An electric motor is a device that converts electrical energy into mechanical energy.
                        In order to reduce the consumption of electric motors, it is recommended to optimize these systems with efficient motors 
                        and control systems such as electronic speed variation.
                    """.trimIndent()
                }
                translation("es") {
                    title = "Motor"
                    description = """
                        Un motor eléctrico es un dispositivo que convierte la energía eléctrica en energía mecánica.
                        Para reducir el consumo de los motores eléctricos, se recomienda optimizar estos sistemas con motores eficientes 
                        y sistemas de control como la variación electrónica de velocidad.
                    """.trimIndent()
                }

                catalogues {
                    catalogue {
                        identifier = "system-191${debug}"
                        type = "100m-system"
                        structure = Structure("item")
                        img = getImg(IMG_SYSTEM)

                        translation("fr") {
                            title = "Régulation"
                            description = """
                            """.trimIndent()
                        }
                        translation("en") {
                            title = "Regulation"
                            description = """
                            """.trimIndent()
                        }
                        translation("es") {
                            title = "Regulación"
                            description = """
                            """.trimIndent()
                        }

                        catalogues {
                            catalogue {
                                identifier = "S-719${debug}"
                                type = "100m-solution"
                                structure = Structure("item")
                                img = getImg(IMG_SOLUTION)
                                license = CentMLicenses.CreativeCommons

                                translation("fr") {
                                    title = "Système de Variation Electronique de Vitesse (VEV) sur un moteur électrique"
                                    description = """
                                        Un moteur étant dimensionné autour de son point de fonctionnement, son rendement sera fortement réduit si sa charge diminue.
                                        Comme certaines utilisations impliquent une très grande variabilité (compression et pompage de fluides), il est d'usage d'utiliser une vanne qui régule débit et pression.
                                        La variation électronique de vitesse modifie la tension et la fréquence d’alimentation du moteur, pour réguler sa vitesse.
                                    """.trimIndent()
                                }
                                translation("en") {
                                    title = "Electronic Speed Variation System (ESV) on an electric motor"
                                    description = """
                                        A motor being sized around its operating point, its efficiency will be greatly reduced if its load decreases.
                                        As some uses involve very high variability (compression and pumping of fluids), it is customary to use a valve that regulates flow and pressure.
                                        Electronic speed variation changes the voltage and frequency of the motor supply to regulate its speed.
                                    """.trimIndent()
                                }
                                translation("es") {
                                    title = "Sistema de Variación Electrónica de Velocidad (VEV) en un motor eléctrico"
                                    description = """
                                        Un motor se dimensiona en torno a su punto de funcionamiento, por lo que su rendimiento se reducirá considerablemente si su carga disminuye.
                                        Dado que algunos usos implican una variabilidad muy alta (compresión y bombeo de fluidos), es habitual utilizar una válvula que regule el flujo y la presión.
                                        La variación electrónica de velocidad cambia la tensión y la frecuencia de la alimentación del motor para regular su velocidad.
                                    """.trimIndent()
                                }

                                themes {
                                    +CentMThemes.Investment
                                }

                            }
                        }
                    }
                }
            }
        }
    }
}
