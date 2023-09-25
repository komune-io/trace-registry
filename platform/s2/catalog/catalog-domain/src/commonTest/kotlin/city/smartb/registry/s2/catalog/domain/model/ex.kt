package city.smartb.registry.s2.catalog.domain.model


val catalog1 = catalog {
    identifier = "http://example.com/catalog"

    datasets {
        dataset {
            identifier = "http://example.com/datasets/weather"

            distributions {
                distribution {
                    identifier = "http://example.com/datasets/weather/csv"
                    mediaType = "text/csv"
                    format = "CSV"
                }
            }
        }
    }
}

val catalog2 = catalog {
    identifier = "http://example.org/catalog1"
    homepage = "http://example.org"
    themes {
        theme {
            id = "http://example.com/animals/vertebrates"
            prefLabels {
                "en" toThat "Vertebrates"
                "fr" toThat "Vertébrés"
            }
            definitions {
                "en" toThat "Animals with a backbone"
                "fr" toThat "Animaux avec une colonne vertébrale"
            }
        }
    }
    datasets {
        dataset {
            identifier = "http://example.org/datasets/weather"
            distributions {

                distribution {
                    identifier = "http://example.org/datasets/weather/csv"
                    mediaType = "text/csv"
                    format = "CSV"
                }
                distribution {
                    identifier = "http://example.org/datasets/weather/json"
                    mediaType = "application/json"
                    format = "JSON"
                }
            }
            spatialCoverage = location {
                geometry = "Polygon((30 10, 40 40, 20 40, 10 20, 30 10))"
            }
            temporalCoverage = periodOfTime {
                startDate = "2018-01-01"
                endDate = "2018-12-31"
            }
        }
        dataset {
            identifier = "http://example.org/datasets/pollution"
            distributions {
                distribution {
                    identifier = "http://example.org/datasets/pollution/csv"
                    mediaType = "text/csv"
                }
            }
        }
    }

    services {
        service {
            identifier = "http://example.org/services/weather"
            endpointURL = "http://example.org/api/weather"
            servesDataset {
                dataset {
                    identifier = "http://example.org/datasets/weather"
                }
            }
        }
    }
}

val schemeDsl = conceptScheme {
    id = "http://example.com/schemes/animals"
    prefLabel {
        "en" toThat "Animal Concept Scheme"
        "fr" toThat "Concept Scheme animal"
    }
    definition {
        "en" toThat "A concept scheme about animals"
        "fr" toThat "Un scheme de concept sur les animaux"
    }
    hasTopConcept = "http://example.com/animals/vertebrates"
    concepts {
        concept {
            id = "http://example.com/animals/vertebrates"
            prefLabels {
                "en" toThat "Vertebrates"
                "fr" toThat "Vertébrés"
            }
            definitions {
                "en" toThat "Animals with a backbone"
                "fr" toThat "Animaux avec une colonne vertébrale"
            }

        }
        concept {
            id = "http://example.com/animals/invertebrates"
            prefLabels {
                "en" toThat "Invertebrates"
                "fr" toThat "Invertébrés"
            }
            definitions {
                "en" toThat "Animals without a backbone"
                "fr" toThat "Animaux sans colonne vertébrale"
            }
        }
    }
}