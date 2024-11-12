package io.komune.registry.script.init.catalogue

import io.komune.registry.dsl.dcat.domain.model.catalogue
import io.komune.registry.dsl.skos.domain.model.concept
import io.komune.registry.s2.structure.domain.model.Structure

fun catalogueCentMillion(debug: String) = catalogue {
    identifier = "objectif100m${debug}"
    title = "Objectif 100m"
    type = "standards"
    structure = Structure("grid")
    description = """
        Ensemble, allègeons les entreprises de 100 millions de tonnes de CO2, d'ici 2030
    """.trimIndent()
    catalogues {
        +secteur(debug)
        +Systeme(debug)
        +Solution(debug)
        +EtudeDeCas(debug)
    }
}


@Suppress("LongMethod", "FunctionNaming")
fun Solution(debug: String) = catalogue {
    identifier = "objectif100m-Solution${debug}"
    title = "Solutions"
    type = "standard"
    structure = Structure("item")
    img = getImg("100m/solution.png")
    description = """
        Le coeur du système est la Solution
    """.trimIndent()
    datasetBase(identifier)
    themes {
        concept {
            id = "Bâtiment"
            prefLabels = mutableMapOf(
                "en" to "Bâtiment",
                "fr" to "Bâtiment"
            )
        }
        concept {
            id = "Cogénération"
            prefLabels = mutableMapOf(
                "en" to "Cogénération",
                "fr" to "Cogénération"
            )
        }
        concept {
            id = "Solution-More"
            prefLabels = mutableMapOf(
                "en" to "...",
                "fr" to "..."
            )
        }
    }

//+Bâtiment (249)
//+Cogénération (9)
//+Déchets (49)
//+Eau (49)
//+Management (ISO 50 001) (53)
//+Nouvelles énergies (52)
//+Procédés (107)
//+Technologies énergétiques (75)
//+Utilités (415)
}


@Suppress("LongMethod", "FunctionNaming")
fun Systeme(debug: String) = catalogue {
    identifier = "objectif100m-Systeme${debug}"
    title = "Systèmes"
    type = "standard"
    structure = Structure("item")
    img = getImg("100m/system.png")
    description = """
        Les Technologies sont des parties de l’activité d’une entreprise où il est possible de présenter de l’information, puis
        d’évaluer les Solutions possibles.
    """.trimIndent()
    datasetBase(identifier)
    themes {
        concept {
            id = "Bâtiment"
            prefLabels = mutableMapOf(
                "en" to "Bâtiment",
                "fr" to "Bâtiment"
            )
        }
        concept {
            id = "Cogénération"
            prefLabels = mutableMapOf(
                "en" to "Cogénération",
                "fr" to "Cogénération"
            )
        }
        concept {
            id = "Solution-More"
            prefLabels = mutableMapOf(
                "en" to "...",
                "fr" to "..."
            )
        }
    }
//    Bâtiment (19) +
//    Cogénération (4) +
//    Déchets (7) +
//    Eau (11) +
//    Management (ISO 50 001) (9) +
//    Nouvelles énergies (40) +
//    Procédés (27) +
//    Technologies énergétiques (19) +
//    Utilités (92) +
}

@Suppress("LongMethod", "FunctionNaming")
fun EtudeDeCas(debug: String) = catalogue {
    identifier = "objectif100m-EtudeDeCas${debug}"
    title = "Etudes de cas"
    type = "standard"
    structure = Structure("item")
    img = getImg("100m/usecase.png")
    description = """
        Une Etude de cas est un cas d’application des Solutions dans des entreprises.
    """.trimIndent()
    datasetBase(identifier)
    themes {
        concept {
            id = "Bâtiment"
            prefLabels = mutableMapOf(
                "en" to "Bâtiment",
                "fr" to "Bâtiment"
            )
        }
        concept {
            id = "Cogénération"
            prefLabels = mutableMapOf(
                "en" to "Cogénération",
                "fr" to "Cogénération"
            )
        }
        concept {
            id = "Solution-More"
            prefLabels = mutableMapOf(
                "en" to "...",
                "fr" to "..."
            )
        }
    }

//+Agriculture & Bois (150)
//+Agro-alimentaire (146)
//+Chimie (97)
//+Industrie (325)
//+Industrie lourde (163)
//+Tertiaire et bâtiment (810)
//+Utilities (175)
}




@Suppress("LongMethod")
fun secteur(debug: String) = catalogue {
    identifier = "objectif100m-secteur${debug}"
    title = "Secteurs"
    type = "standard"
    structure = Structure("item")
    img = getImg("100m/secteur.png")
    description = """
         Ce sont les Secteurs économiques qui regroupent toutes les activités possibles des entreprises.
            """.trimIndent()
    datasetBase(identifier)

    themes {
        concept {
            id = "AgricultureBois"
            prefLabels = mutableMapOf(
                "en" to "Agriculture Bois",
                "fr" to "Agriculture Bois"
            )
        }
        concept {
            id = "AgroAlimentaire"
            prefLabels = mutableMapOf(
                "en" to "Agro-alimentaire",
                "fr" to "Agro-alimentaire"
            )
        }
    }
    catalogues {
        catalogue {
            identifier = "objectif100m-secteur-programs${debug}"
            title = "Programs"
            type = "programs"
            structure = Structure("grid")
            img = getImg("100m/secteur.png")
            datasetBase(identifier)
            catalogues {
                +CentMSecteur.AgricultureBois(debug)
                +CentMSecteur.AgroAlimentaire(debug)
                +CentMSecteur.Chimie(debug)
                +CentMSecteur.Industrie(debug)
                +CentMSecteur.IndustrieLourde(debug)
                +CentMSecteur.TertiaireBatiment(debug)
                +CentMSecteur.Utilities(debug)
            }
        }
    }
}

@Suppress("LargeClass")
object CentMSecteur {

    @Suppress("LongMethod", "FunctionNaming")
    fun AgricultureBois(debug: String) = catalogue {
        identifier = "objectif100m-secteur-AgricultureBois${debug}"
        title = "Agriculture & Bois"
        description = """
            Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
            la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, la viticulture, 
            l'arboriculture et les cultures sous serres chauffées.
        """.trimIndent()
        type = "programs"
        img = getImg("100m/secteur.png")
        structure = Structure("item")
        datasetBase(identifier)
        catalogues {
            catalogue {
                identifier = "objectif100m-secteur-AgricultureBois-Bois${debug}"
                title = "Bois"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
                type = "programs"
                img = getImg("100m/secteur.png")
               structure = Structure("item")
                catalogues {
                    catalogue {
                        identifier = "objectif100m-secteur-AgricultureBois-Bois-EtudeDeCas${debug}"
                        title = "Etude de cas"
                        type = "standard"
                        structure = Structure("item")
                        img = getImg("100m/usecase.png")
                        description = """
                            Une Etude de cas est un cas d’application des Solutions dans des entreprises.
                        """.trimIndent()
                        datasetBase(identifier)
                        catalogues {
                            catalogue {
                                identifier = "objectif100m-secteur-AgricultureBois-Bois-EtudeDeCas-84${debug}"
                                title = "Etude de cas 84"
                                type = "standard"
                                structure = Structure("item")
                                img = getImg("100m/usecase.png")
                                description = """
                                    Etude de cas basée sur la source publique :  CDC Climat
                                """.trimIndent()
                                datasetBase(identifier)
                            }
                        }
                    }
                }
            }
            catalogue {
                identifier = "objectif100m-secteur-AgricultureBois-Culture${debug}"
                title = "Culture"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
                type = "programs"
                img = getImg("100m/secteur.png")
               structure = Structure("item")
            }
            catalogue {
                identifier = "objectif100m-secteur-AgricultureBois-Elevage${debug}"
                title = "Elevage"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
                type = "programs"
                img = getImg("100m/secteur.png")
               structure = Structure("item")
            }
            catalogue {
                identifier = "objectif100m-secteur-AgricultureBois-MaterielAgricole${debug}"
                title = "Matériel agricole"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
                type = "programs"
                img = getImg("100m/secteur.png")
               structure = Structure("item")
            }
            catalogue {
                identifier = "objectif100m-secteur-AgricultureBois-Sechage${debug}"
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
                type = "programs"
                img = getImg("100m/secteur.png")
               structure = Structure("item")
            }
            catalogue {
                identifier = "objectif100m-secteur-AgricultureBois-Serres${debug}"
                title = "Serres"
                description = """
                    Le secteur de l'agriculture comprend les grandes cultures, la production de lait, 
                    la production de viande de boucherie, l'élevage de porcs, de volailles et de lapins, 
                    la viticulture, l'arboriculture et les cultures sous serres chauffées.
                """.trimIndent()
                type = "programs"
                img = getImg("100m/secteur.png")
               structure = Structure("item")
            }
        }
    }

    @Suppress("FunctionNaming")
    fun AgroAlimentaire(debug: String) = catalogue {
        identifier = "objectif100m-secteur-AgroAlimentaire-${debug}"
        title = "Agro-alimentaire"
        type = "program"
        img = getImg("100m/secteur.png")
        structure = Structure("item")
        description = """
           L'industrie agro-alimentaire est le secteur où les matières premières issues de l'agriculture, 
           de l'élevage, de l'arboriculture, de la pêche sont transformées 
           en produits alimentaires destinés à la consommation.
            """.trimIndent()
        datasetBase(identifier)
        themes {
            concept {
                id = "AgroAlimentaire"
                prefLabels = mutableMapOf(
                    "en" to "Agro-alimentaire",
                    "fr" to "Agro-alimentaire"
                )
            }
        }
    }

    @Suppress("FunctionNaming")
    fun Chimie(debug: String) = catalogue {
        identifier = "objectif100m-secteur-Chimie-${debug}"
        title = "Chimie"
        type = "program"
        structure = Structure("item")
        img = getImg("100m/secteur.png")
        description = """
            Le secteur de la chimie comprend la chimie minérale, la chimie organique, la chimie fine pharmaceutique, 
            les spécialités chimiques (peintures, huiles, colles...), produits de beautés et produits d'entretien.
            """.trimIndent()
        datasetBase(identifier)
        themes {
            concept {
                id = "Chimie"
                prefLabels = mutableMapOf(
                    "en" to "Chimie",
                    "fr" to "Chimie"
                )
            }
        }
    }

    @Suppress("FunctionNaming")
    fun Industrie(debug: String) = catalogue {
        identifier = "objectif100m-secteur-Industrie-${debug}"
        title = "Industrie"
        type = "program"
        structure = Structure("item")
        img = getImg("100m/secteur.png")
        description = """
            Le secteur de l'industrie comprend l'automobile, l'aéronautique, les céramiques, le caoutchouc, 
            l'électronique, la mécanique et la fonderie, la papeterie, le textile et la plasturgie.
            """.trimIndent()
        datasetBase(identifier)
        themes {
            concept {
                id = "Industrie"
                prefLabels = mutableMapOf(
                    "en" to "Industrie",
                    "fr" to "Industrie"
                )
            }
        }
    }

    @Suppress("FunctionNaming")
    fun IndustrieLourde(debug: String) = catalogue {
        identifier = "objectif100m-secteur-IndustrieLourde-${debug}"
        title = "Industrie Lourde"
        type = "program"
        structure = Structure("item")
        img = getImg("100m/secteur.png")
        description = """
            Le secteur de l'industrie lourde comprend les secteurs du ciment, de la chaux, des hydrocarbures, 
            des matériaux non-ferreux, des mines et des carrières, du raffinage, de la sidérurgie et du verre.
            """.trimIndent()
        datasetBase(identifier)
        themes {
            concept {
                id = "IndustrieLourde"
                prefLabels = mutableMapOf(
                    "en" to "Industrie Lourde",
                    "fr" to "Industrie Lourde"
                )
            }
        }
    }

    @Suppress("FunctionNaming")
    fun TertiaireBatiment(debug: String) = catalogue {
        identifier = "objectif100m-secteur-TertiaireBatiment-${debug}"
        title = "Tertiaire et bâtiment"
        type = "program"
        structure = Structure("item")
        img = getImg("100m/secteur.png")
        description = """
            Le secteur tertiaire concerne les bâtiments qui abritent des commerces, des administrations, 
            des activités financières et immobilières ou encore des services aux entreprises et aux particuliers.
            Le secteur résidentiel désigne les bâtiments uniquement réservés à l'habitation.
            """.trimIndent()
        datasetBase(identifier)
        themes {
            concept {
                id = "TertiaireBatiment"
                prefLabels = mutableMapOf(
                    "en" to "Tertiaire et bâtiment",
                    "fr" to "Tertiaire et bâtiment"
                )
            }
        }
    }

    @Suppress("FunctionNaming")
    fun Utilities(debug: String) = catalogue {
        identifier = "objectif100m-secteur-Utilities-${debug}"
        title = "Utilities"
        type = "program"
        structure = Structure("item")
        img = getImg("100m/secteur.png")
        description = """
            Le secteur des "utilities" regroupe les activités de Bâtiment et Travaux Publics, 
            de traitement des déchets, d'assainissement de l'eau, de transport et logistique et de production d'énergie.
            """.trimIndent()
        datasetBase(identifier)
        themes {
            concept {
                id = "Utilities"
                prefLabels = mutableMapOf(
                    "en" to "Utilities",
                    "fr" to "Utilities"
                )
            }
        }
    }

}
