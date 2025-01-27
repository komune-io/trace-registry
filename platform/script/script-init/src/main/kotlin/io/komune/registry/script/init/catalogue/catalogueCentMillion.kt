@file:Suppress("LongMethod", "FunctionNaming", "LargeClass")
package io.komune.registry.script.init.catalogue

import io.komune.registry.dsl.dcat.domain.model.catalogueI18n
import io.komune.registry.dsl.skos.domain.model.concept
import io.komune.registry.s2.structure.domain.model.Structure

const val IMG_SOLUTION = "100m/solution.png"
const val IMG_SYSTEM = "100m/system.png"
const val IMG_USECASE = "100m/usecase.png"
const val IMG_SECTEUR = "100m/secteur.png"

fun catalogueCentMillion(debug: String) = catalogueI18n {
    identifier = "objectif100m${debug}"
    type = "standards"
    structure = Structure("grid")
    language("fr") {
        title = "Objectif 100m"
        description = """
            Ensemble, allégeons les entreprises de 100 millions de tonnes de CO2, d'ici 2030
        """.trimIndent()
    }
    language("en") {
        title = "Objective 100m"
        description = """
            Together, let's reduce companies' CO2 emissions by 100 million tonnes by 2030
        """.trimIndent()
    }
    language("es") {
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


fun Solution(debug: String) = catalogueI18n {
    identifier = "objectif100m-Solution${debug}"
    type = "solution"
    structure = Structure("item")
    img = getImg(IMG_SOLUTION)
    language("fr") {
        title = "Solutions"
        description = """
            Le coeur du système est la Solution
        """.trimIndent()
    }
    language("en") {
        title = "Solutions"
        description = """
            The heart of the system is the Solution
        """.trimIndent()
    }
    language("es") {
        title = "Soluciones"
        description = """
            El corazón del sistema es la Solución
        """.trimIndent()
    }

    themes {
        +CentMThemes.Batiment
        +CentMThemes.Cogeneration
        +CentMThemes.SolutionMore
    }
}

fun Systeme(debug: String) = catalogueI18n {
    identifier = "objectif100m-systeme${debug}"
    type = "system"
    structure = Structure("grid")
    img = getImg(IMG_SYSTEM)
    language("fr") {
        title = "Systèmes"
        description = """
            Les Technologies sont des parties de l’activité d’une entreprise où il est possible de présenter de l’information, puis
            d’évaluer les Solutions possibles.
        """.trimIndent()
    }
    language("en") {
        title = "Systems"
        description = """
            Technologies are parts of a company's activity where it is possible to present information, then
            to evaluate possible Solutions.
        """.trimIndent()
    }
    language("es") {
        title = "Sistemas"
        description = """
            Las Tecnologías son partes de la actividad de una empresa donde es posible presentar información, luego
            evaluar posibles Soluciones.
        """.trimIndent()
    }
    themes {
        +CentMThemes.Batiment
        +CentMThemes.Cogeneration
        +CentMThemes.SolutionMore
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

fun EtudeDeCas(debug: String) = catalogueI18n {
    identifier = "objectif100m-EtudeDeCas${debug}"
    type = "projet"
    structure = Structure("item")
    img = getImg(IMG_USECASE)
    language("fr") {
        title = "Etudes de cas"
        description = """
            Une Etude de cas est un cas d’application des Solutions dans des entreprises.
        """.trimIndent()
    }
    language("en") {
        title = "Use cases"
        description = """
            A Use case is a case of application of Solutions in companies.
        """.trimIndent()
    }
    language("es") {
        title = "Casos de uso"
        description = """
            Un caso de uso es un caso de aplicación de Soluciones en empresas.
        """.trimIndent()
    }

    themes {
        +CentMThemes.Batiment
        +CentMThemes.Cogeneration
        +CentMThemes.SolutionMore
    }
}

fun Secteur(debug: String) = catalogueI18n {
    identifier = "objectif100m-secteur${debug}"
    type = "sector"
    structure = Structure("grid")
    img = getImg(IMG_SECTEUR)
    language("fr") {
        title = "Secteurs"
        description = """
             Ce sont les Secteurs économiques qui regroupent toutes les activités possibles des entreprises.
        """.trimIndent()
    }
    language("en") {
        title = "Sectors"
        description = """
            These are the Economic Sectors that group together all the possible activities of companies.
        """.trimIndent()
    }
    language("es") {
        title = "Sectores"
        description = """
            Estos son los Sectores Económicos que agrupan todas las posibles actividades de las empresas.
        """.trimIndent()
    }

    themes {
        +CentMThemes.AgricultureBois
        +CentMThemes.AgroAlimentaire
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
    val Batiment = concept {
        id = "Batiment"
        prefLabels = mutableMapOf(
            "fr" to "Bâtiment",
            "en" to "Building",
            "es" to "Edificio"
        )
    }

    val Cogeneration = concept {
        id = "Cogeneration"
        prefLabels = mutableMapOf(
            "fr" to "Cogénération",
            "en" to "Cogeneration",
            "es" to "Cogeneración"
        )
    }

    val SolutionMore = concept {
        id = "Solution-More"
        prefLabels = mutableMapOf(
            "fr" to "...",
            "en" to "...",
            "es" to "..."
        )
    }

    val AgricultureBois = concept {
        id = "AgricultureBois"
        prefLabels = mutableMapOf(
            "fr" to "Agriculture Bois",
            "en" to "Wood Agriculture",
            "es" to "Agricultura Madera"
        )
    }

    val AgroAlimentaire = concept {
        id = "AgroAlimentaire"
        prefLabels = mutableMapOf(
            "fr" to "Agro-alimentaire",
            "en" to "Agro-food",
            "es" to "Agroalimentario"
        )
    }

    val Chimie = concept {
        id = "Chimie"
        prefLabels = mutableMapOf(
            "fr" to "Chimie",
            "en" to "Chemistry",
            "es" to "Química"
        )
    }

    val Industrie = concept {
        id = "Industrie"
        prefLabels = mutableMapOf(
            "fr" to "Industrie",
            "en" to "Industry",
            "es" to "Industria"
        )
    }

    val IndustrieLourde = concept {
        id = "IndustrieLourde"
        prefLabels = mutableMapOf(
            "fr" to "Industrie lourde",
            "en" to "Heavy industry",
            "es" to "Industria pesada"
        )
    }

    val TertiaireBatiment = concept {
        id = "TertiaireBatiment"
        prefLabels = mutableMapOf(
            "fr" to "Tertiaire et bâtiment",
            "en" to "Tertiary and building",
            "es" to "Terciario y edificio"
        )
    }

    val Utilities = concept {
        id = "Utilities"
        prefLabels = mutableMapOf(
            "fr" to "Utilités",
            "en" to "Utilities",
            "es" to "Utilidades"
        )
    }

    val Dechets = concept {
        id = "Dechets"
        prefLabels = mutableMapOf(
            "fr" to "Déchets",
            "en" to "Waste",
            "es" to "Residuos"
        )
    }

    val Eau = concept {
        id = "Eau"
        prefLabels = mutableMapOf(
            "fr" to "Eau",
            "en" to "Water",
            "es" to "Agua"
        )
    }

    val Management = concept {
        id = "Management"
        prefLabels = mutableMapOf(
            "fr" to "Management",
            "en" to "Management",
            "es" to "Gestión"
        )
    }

    val NouvellesEnergies = concept {
        id = "NouvellesEnergies"
        prefLabels = mutableMapOf(
            "fr" to "Nouvelles énergies",
            "en" to "New energies",
            "es" to "Nuevas energías"
        )
    }

    val Procedes = concept {
        id = "Procedes"
        prefLabels = mutableMapOf(
            "fr" to "Procédés",
            "en" to "Processes",
            "es" to "Procesos"
        )
    }

    val TechnologiesEnergetiques = concept {
        id = "TechnologiesEnergetiques"
        prefLabels = mutableMapOf(
            "fr" to "Technologies énergétiques",
            "en" to "Energy technologies",
            "es" to "Tecnologías energéticas"
        )
    }
}

object CentMSecteur {
    fun AgricultureBois(debug: String) = catalogueI18n {
        identifier = "sector-2${debug}"
        type = "sector"
        img = getImg(IMG_SECTEUR)
        structure = Structure("item")

        language("fr") {
            title = "Agriculture & Bois"
            description = """
                Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, la viticulture, 
                l'arboriculture et les cultures sous serres chauffées.
            """.trimIndent()
        }
        language("en") {
            title = "Agriculture & Wood"
            description = """
                The agriculture sector includes large crops, milk production, 
                beef production, pig, poultry and rabbit farming, viticulture, 
                arboriculture and crops under heated greenhouses.
            """.trimIndent()
        }
        language("es") {
            title = "Agricultura y Madera"
            description = """
                El sector agrícola incluye grandes cultivos, producción de leche, 
                producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                arboricultura y cultivos en invernaderos calefactados.
            """.trimIndent()
        }

        childCatalogue {
            identifier = "sector-3${debug}"
            type = "sector"
            img = getImg(IMG_SECTEUR)
            structure = Structure("item")

            language("fr") {
                title = "Bois"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
            }
            language("en") {
                title = "Wood"
                description = """
                    The agriculture sector includes large crops, milk production, 
                    beef production, pig, poultry and rabbit farming, viticulture, 
                    arboriculture and crops under heated greenhouses.
                """.trimIndent()
            }
            language("es") {
                title = "Madera"
                description = """
                    El sector agrícola incluye grandes cultivos, producción de leche, 
                    producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                    arboricultura y cultivos en invernaderos calefactados.
                """.trimIndent()
            }

            childCatalogue {
                identifier = "objectif100m-secteur-AgricultureBois-Bois-EtudeDeCas${debug}"
                type = "sector"
                structure = Structure("item")
                img = getImg(IMG_USECASE)

                language("fr") {
                    title = "Etude de cas"
                    description = """
                        Une Etude de cas est un cas d’application des Solutions dans des entreprises.
                    """.trimIndent()
                }
                language("en") {
                    title = "Use case"
                    description = """
                        A Use case is a case of application of Solutions in companies.
                    """.trimIndent()
                }
                language("es") {
                    title = "Caso de uso"
                    description = """
                        Un caso de uso es un caso de aplicación de Soluciones en empresas.
                    """.trimIndent()
                }

                childCatalogue {
                    identifier = "E-84${debug}"
                    type = "sector"
                    structure = Structure("item")
                    img = getImg(IMG_USECASE)
                    language("fr") {
                        title = "Etude de cas 84"
                        description = """
                            Etude de cas basée sur la source publique :  CDC Climat
                        """.trimIndent()
                    }
                    language("en") {
                        title = "Use case 84"
                        description = """
                            Use case based on the public source: CDC Climat
                        """.trimIndent()
                    }
                    language("es") {
                        title = "Caso de uso 84"
                        description = """
                            Caso de uso basado en la fuente pública: CDC Climat
                        """.trimIndent()
                    }
                }
            }
        }

        childCatalogue {
            identifier = "sector-4${debug}"
            type = "sector"
            img = getImg(IMG_SECTEUR)
            structure = Structure("item")

            language("fr") {
                title = "Culture"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
            }
            language("en") {
                title = "Culture"
                description = """
                    The agriculture sector includes large crops, milk production, 
                    beef production, pig, poultry and rabbit farming, viticulture, 
                    arboriculture and crops under heated greenhouses.
                """.trimIndent()
            }
            language("es") {
                title = "Cultura"
                description = """
                    El sector agrícola incluye grandes cultivos, producción de leche, 
                    producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                    arboricultura y cultivos en invernaderos calefactados.
                """.trimIndent()
            }
        }

        childCatalogue {
            identifier = "sector-5${debug}"
            type = "sector"
            img = getImg(IMG_SECTEUR)
            structure = Structure("item")

            language("fr") {
                title = "Elevage"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
            }
            language("en") {
                title = "Breeding"
                description = """
                    The agriculture sector includes large crops, milk production, 
                    beef production, pig, poultry and rabbit farming, viticulture, 
                    arboriculture and crops under heated greenhouses.
                """.trimIndent()
            }
            language("es") {
                title = "Crianza"
                description = """
                    El sector agrícola incluye grandes cultivos, producción de leche, 
                    producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                    arboricultura y cultivos en invernaderos calefactados.
                """.trimIndent()
            }
        }

        childCatalogue {
            identifier = "sector-6${debug}"
            type = "sector"
            img = getImg(IMG_SECTEUR)
            structure = Structure("item")

            language("fr") {
                title = "Matériel agricole"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
            }
            language("en") {
                title = "Agricultural equipment"
                description = """
                    The agriculture sector includes large crops, milk production, 
                    beef production, pig, poultry and rabbit farming, viticulture, 
                    arboriculture and crops under heated greenhouses.
                """.trimIndent()
            }
            language("es") {
                title = "Equipo agrícola"
                description = """
                    El sector agrícola incluye grandes cultivos, producción de leche, 
                    producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                    arboricultura y cultivos en invernaderos calefactados.
                """.trimIndent()
            }
        }

        childCatalogue {
            identifier = "sector-7${debug}"
            type = "sector"
            img = getImg(IMG_SECTEUR)
            structure = Structure("item")

            language("fr") {
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
            language("en") {
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
            language("es") {
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

        childCatalogue {
            identifier = "sector-8${debug}"
            type = "sector"
            img = getImg(IMG_SECTEUR)
            structure = Structure("item")
            language("fr") {
                title = "Serres"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
            }
            language("en") {
                title = "Greenhouses"
                description = """
                    The agriculture sector includes large crops, milk production, 
                    beef production, pig, poultry and rabbit farming, viticulture, 
                    arboriculture and crops under heated greenhouses.
                """.trimIndent()
            }
            language("es") {
                title = "Invernaderos"
                description = """
                    El sector agrícola incluye grandes cultivos, producción de leche, 
                    producción de carne de vacuno, cría de cerdos, aves de corral y conejos, viticultura, 
                    arboricultura y cultivos en invernaderos calefactados.
                """.trimIndent()
            }
        }
    }

    fun AgroAlimentaire(debug: String) = catalogueI18n {
        identifier = "sector-9${debug}"
        type = "sector"
        img = getImg(IMG_SECTEUR)
        structure = Structure("item")

        language("fr") {
            title = "Agro-alimentaire"
            description = """
               L'industrie agro-alimentaire est le secteur où les matières premières issues de l'agriculture, 
               de l'élevage, de l'arboriculture, de la pêche sont transformées 
               en produits alimentaires destinés à la consommation.
            """.trimIndent()
        }
        language("en") {
            title = "Agro-food"
            description = """
                The agri-food industry is the sector where raw materials from agriculture, 
                livestock, arboriculture, fishing are transformed 
                into food products intended for consumption.
            """.trimIndent()
        }
        language("es") {
            title = "Agroalimentario"
            description = """
                La industria agroalimentaria es el sector donde las materias primas de la agricultura, 
                la ganadería, la arboricultura, la pesca se transforman 
                en productos alimenticios destinados al consumo.
            """.trimIndent()
        }

        themes {
            +CentMThemes.AgroAlimentaire
        }
    }

    fun Chimie(debug: String) = catalogueI18n {
        identifier = "sector-18${debug}"
        type = "sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        language("fr") {
            title = "Chimie"
            description = """
                Le secteur de la chimie comprend la chimie minérale, la chimie organique, la chimie fine pharmaceutique, 
                les spécialités chimiques (peintures, huiles, colles...), produits de beautés et produits d'entretien.
            """.trimIndent()
        }
        language("en") {
            title = "Chemistry"
            description = """
                The chemistry sector includes mineral chemistry, organic chemistry, fine pharmaceutical chemistry, 
                chemical specialties (paints, oils, glues...), beauty products and cleaning products.
            """.trimIndent()
        }
        language("es") {
            title = "Química"
            description = """
                El sector de la química incluye la química mineral, la química orgánica, la química fina farmacéutica, 
                especialidades químicas (pinturas, aceites, pegamentos...), productos de belleza y productos de limpieza.
            """.trimIndent()
        }

        themes {
            +CentMThemes.Chimie
        }
    }

    fun Industrie(debug: String) = catalogueI18n {
        identifier = "sector-33${debug}"
        type = "sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        language("fr") {
            title = "Industrie"
            description = """
                Le secteur de l'industrie comprend l'automobile, l'aéronautique, les céramiques, le caoutchouc, 
                l'électronique, la mécanique et la fonderie, la papeterie, le textile et la plasturgie.
            """.trimIndent()
        }
        language("en") {
            title = "Industry"
            description = """
                The industry sector includes automotive, aeronautics, ceramics, rubber, 
                electronics, mechanics and foundry, paper, textiles and plastics.
            """.trimIndent()
        }
        language("es") {
            title = "Industria"
            description = """
                El sector industrial incluye automoción, aeronáutica, cerámica, caucho, 
                electrónica, mecánica y fundición, papel, textiles y plásticos.
            """.trimIndent()
        }

        themes {
            +CentMThemes.Industrie
        }
    }

    fun IndustrieLourde(debug: String) = catalogueI18n {
        identifier = "sector-21${debug}"
        type = "sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        language("fr") {
            title = "Industrie Lourde"
            description = """
                Le secteur de l'industrie lourde comprend les secteurs du ciment, de la chaux, des hydrocarbures, 
                des matériaux non-ferreux, des mines et des carrières, du raffinage, de la sidérurgie et du verre.
            """.trimIndent()
        }
        language("en") {
            title = "Heavy Industry"
            description = """
                The heavy industry sector includes cement, lime, hydrocarbons, 
                non-ferrous materials, mining and quarries, refining, steel and glass.
            """.trimIndent()
        }
        language("es") {
            title = "Industria Pesada"
            description = """
                El sector de la industria pesada incluye cemento, cal, hidrocarburos, 
                materiales no ferrosos, minería y canteras, refinación, acero y vidrio.
            """.trimIndent()
        }

        themes {
            +CentMThemes.IndustrieLourde
        }
    }

    fun TertiaireBatiment(debug: String) = catalogueI18n {
        identifier = "sector-50${debug}"
        type = "sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        language("fr") {
            title = "Tertiaire et bâtiment"
            description = """
                Le secteur tertiaire concerne les bâtiments qui abritent des commerces, des administrations, 
                des activités financières et immobilières ou encore des services aux entreprises et aux particuliers.
                Le secteur résidentiel désigne les bâtiments uniquement réservés à l'habitation.
            """.trimIndent()
        }
        language("en") {
            title = "Tertiary and building"
            description = """
                The tertiary sector concerns buildings that house shops, administrations, 
                financial and real estate activities or services to businesses and individuals.
                The residential sector refers to buildings reserved exclusively for housing.
            """.trimIndent()
        }
        language("es") {
            title = "Terciario y edificio"
            description = """
                El sector terciario se refiere a edificios que albergan tiendas, administraciones, 
                actividades financieras e inmobiliarias o servicios a empresas y particulares.
                El sector residencial se refiere a edificios reservados exclusivamente para viviendas.
            """.trimIndent()
        }

        themes {
            +CentMThemes.TertiaireBatiment
        }
    }

    fun Utilities(debug: String) = catalogueI18n {
        identifier = "sector-44${debug}"
        type = "sector"
        structure = Structure("item")
        img = getImg(IMG_SECTEUR)

        language("fr") {
            title = "Utilities"
            description = """
                Le secteur des "utilities" regroupe les activités de Bâtiment et Travaux Publics, 
                de traitement des déchets, d'assainissement de l'eau, de transport et logistique et de production d'énergie.
            """.trimIndent()
        }
        language("en") {
            title = "Utilities"
            description = """
                The "utilities" sector includes Building and Public Works activities, 
                waste treatment, water sanitation, transport and logistics and energy production.
            """.trimIndent()
        }
        language("es") {
            title = "Utilities"
            description = """
                El sector de "utilities" incluye actividades de Construcción y Obras Públicas, 
                tratamiento de residuos, saneamiento del agua, transporte y logística y producción de energía.
            """.trimIndent()
        }

        themes {
            +CentMThemes.Utilities
        }
    }
}

object CentMSystem {
    fun Batiment(debug: String) = catalogueI18n {
        identifier = "system-5${debug}"
        type = "system"
        img = getImg(IMG_SYSTEM)
        structure = Structure("item")

        language("fr") {
            title = "Bâtiment"
            description = """
            """.trimIndent()
        }
        language("en") {
            title = "Building"
            description = """
            """.trimIndent()
        }
        language("es") {
            title = "Edificio"
            description = """
            """.trimIndent()
        }
    }

    fun Cogeneration(debug: String) = catalogueI18n {
        identifier = "system-31${debug}"
        type = "system"
        img = getImg(IMG_SYSTEM)
        structure = Structure("item")

        language("fr") {
            title = "Cogénération"
            description = """""".trimIndent()
        }
        language("en") {
            title = "Cogeneration"
            description = """""".trimIndent()
        }
        language("es") {
            title = "Cogeneración"
            description = """""".trimIndent()
        }
    }

    fun Dechets(debug: String) = catalogueI18n {
        identifier = "system-49${debug}"
        type = "system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        language("fr") {
            title = "Déchets"
            description = """""".trimIndent()
        }
        language("en") {
            title = "Waste"
            description = """""".trimIndent()
        }
        language("es") {
            title = "Residuos"
            description = """""".trimIndent()
        }

        themes {
            +CentMThemes.Dechets
        }
    }

    fun Eau(debug: String) = catalogueI18n {
        identifier = "system-27${debug}"
        type = "system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        language("fr") {
            title = "Eau"
            description = """""".trimIndent()
        }
        language("en") {
            title = "Water"
            description = """""".trimIndent()
        }
        language("es") {
            title = "Agua"
            description = """""".trimIndent()
        }

        themes {
            +CentMThemes.Eau
        }
    }

    fun Management(debug: String) = catalogueI18n {
        identifier = "system-2${debug}"
        type = "system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        language("fr") {
            title = "Management (ISO 50 001)"
            description = """""".trimIndent()
        }
        language("en") {
            title = "Management (ISO 50 001)"
            description = """""".trimIndent()
        }
        language("es") {
            title = "Gestión (ISO 50 001)"
            description = """""".trimIndent()
        }

        themes {
            +CentMThemes.Management
        }
    }

    fun NouvellesEnergies(debug: String) = catalogueI18n {
        identifier = "system-36${debug}"
        type = "system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        language("fr") {
            title = "Nouvelles énergies"
            description = """""".trimIndent()
        }
        language("en") {
            title = "New energies"
            description = """""".trimIndent()
        }
        language("es") {
            title = "Nuevas energías"
            description = """""".trimIndent()
        }

        themes {
            +CentMThemes.NouvellesEnergies
        }
    }

    fun Procedes(debug: String) = catalogueI18n {
        identifier = "system-19${debug}"
        type = "system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        language("fr") {
            title = "Procédés"
            description = """""".trimIndent()
        }
        language("en") {
            title = "Processes"
            description = """""".trimIndent()
        }
        language("es") {
            title = "Procesos"
            description = """""".trimIndent()
        }

        themes {
            +CentMThemes.Procedes
        }
    }

    fun TechnologiesEnergetiques(debug: String) = catalogueI18n {
        identifier = "system-47${debug}"
        type = "system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        language("fr") {
            title = "Technologies énergétiques"
            description = """""".trimIndent()
        }
        language("en") {
            title = "Energy technologies"
            description = """""".trimIndent()
        }
        language("es") {
            title = "Tecnologías energéticas"
            description = """""".trimIndent()
        }

        themes {
            +CentMThemes.TechnologiesEnergetiques
        }
    }

    fun Utilites(debug: String) = catalogueI18n {
        identifier = "system-10${debug}"
        type = "system"
        structure = Structure("item")
        img = getImg(IMG_SYSTEM)

        language("fr") {
            title = "Utilités"
            description = """
                Les utilités sont définies comme étant des systèmes servant en parallèle à plusieurs unités de production. 
                L'air comprimé, la production de froid, la distribution électrique, les systèmes motorisés, la ventilation industrielle, 
                les stations de pompage, la production de vapeur, d'eau chaude et les réseaux associés font partie des utilités.
            """.trimIndent()
        }
        language("en") {
            title = "Utilities"
            description = """
                Utilities are defined as systems serving in parallel to several production units. 
                Compressed air, cold production, electrical distribution, motorized systems, industrial ventilation, 
                pumping stations, steam production, hot water and associated networks are part of utilities.
            """.trimIndent()
        }
        language("es") {
            title = "Utilidades"
            description = """
                Las utilidades se definen como sistemas que sirven en paralelo a varias unidades de producción. 
                El aire comprimido, la producción de frío, la distribución eléctrica, los sistemas motorizados, la ventilación industrial, 
                las estaciones de bombeo, la producción de vapor, agua caliente y las redes asociadas forman parte de las utilidades.
            """.trimIndent()
        }

        themes {
            +CentMThemes.Utilities
        }

        childCatalogue {
            identifier = "system-15${debug}"
            type = "system"
            structure = Structure("item")
            img = getImg(IMG_SYSTEM)

            language("fr") {
                title = "Moteur"
                description = """
                    Un moteur électrique est un dispositif permettant de convertir de l'énergie électrique en énergie mécanique.
                    Afin de réduire la consommation des moteurs électriques, il est recommandé d'optimiser ces systèmes par des moteurs 
                    performants et des systèmes de pilotage tel que la variation électronique de vitesse.
                """.trimIndent()
            }
            language("en") {
                title = "Engine"
                description = """
                    An electric motor is a device that converts electrical energy into mechanical energy.
                    In order to reduce the consumption of electric motors, it is recommended to optimize these systems with efficient motors 
                    and control systems such as electronic speed variation.
                """.trimIndent()
            }
            language("es") {
                title = "Motor"
                description = """
                    Un motor eléctrico es un dispositivo que convierte la energía eléctrica en energía mecánica.
                    Para reducir el consumo de los motores eléctricos, se recomienda optimizar estos sistemas con motores eficientes 
                    y sistemas de control como la variación electrónica de velocidad.
                """.trimIndent()
            }

            childCatalogue {
                identifier = "system-191${debug}"
                type = "system"
                structure = Structure("item")
                img = getImg(IMG_SYSTEM)

                language("fr") {
                    title = "Régulation"
                    description = """
                    """.trimIndent()
                }
                language("en") {
                    title = "Regulation"
                    description = """
                    """.trimIndent()
                }
                language("es") {
                    title = "Regulación"
                    description = """
                    """.trimIndent()
                }

                childCatalogue {
                    identifier = "S-719${debug}"
                    type = "system"
                    structure = Structure("item")
                    img = getImg(IMG_SOLUTION)

                    language("fr") {
                        title = "Système de Variation Electronique de Vitesse (VEV) sur un moteur électrique"
                        description = """
                            Un moteur étant dimensionné autour de son point de fonctionnement, son rendement sera fortement réduit si sa charge diminue.
                            Comme certaines utilisations impliquent une très grande variabilité (compression et pompage de fluides), il est d'usage d'utiliser une vanne qui régule débit et pression.
                            La variation électronique de vitesse modifie la tension et la fréquence d’alimentation du moteur, pour réguler sa vitesse.
                        """.trimIndent()
                    }
                    language("en") {
                        title = "Electronic Speed Variation System (ESV) on an electric motor"
                        description = """
                            A motor being sized around its operating point, its efficiency will be greatly reduced if its load decreases.
                            As some uses involve very high variability (compression and pumping of fluids), it is customary to use a valve that regulates flow and pressure.
                            Electronic speed variation changes the voltage and frequency of the motor supply to regulate its speed.
                        """.trimIndent()
                    }
                    language("es") {
                        title = "Sistema de Variación Electrónica de Velocidad (VEV) en un motor eléctrico"
                        description = """
                            Un motor se dimensiona en torno a su punto de funcionamiento, por lo que su rendimiento se reducirá considerablemente si su carga disminuye.
                            Dado que algunos usos implican una variabilidad muy alta (compresión y bombeo de fluidos), es habitual utilizar una válvula que regule el flujo y la presión.
                            La variación electrónica de velocidad cambia la tensión y la frecuencia de la alimentación del motor para regular su velocidad.
                        """.trimIndent()
                    }
                }
            }
        }
    }
}
