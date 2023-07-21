val catalog = catalog {
    identifier = "http://example.com/catalog"

    themes {
        theme {
            identifier = "http://example.com/themes/data-science"
        }
    }

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
            identifier = "http://example.org/themes/science"
        }
        theme {
            identifier = "http://example.org/themes/weather"
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