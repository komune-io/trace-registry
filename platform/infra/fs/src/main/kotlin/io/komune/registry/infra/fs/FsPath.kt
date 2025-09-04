package io.komune.registry.infra.fs

import io.komune.fs.s2.file.domain.model.FilePath

object FsPath {
    object Control {
        object Certification {
            const val TYPE = "certifications"
            const val EVIDENCE_TYPE = "evidence_type"

            fun evidenceType(certificationId: String, evidenceTypeId: String) = FilePath(
                objectType = TYPE,
                objectId = certificationId,
                directory = "${EVIDENCE_TYPE}_$evidenceTypeId",
                name = ""
            )
        }

        object Badge {
            const val TYPE = "badges"
            const val IMAGES = "IMAGES"
            const val IMAGE_DEFAULT = "default"

            fun image(badgeId: String, levelId: String?, extension: String) = FilePath(
                objectType = TYPE,
                objectId = badgeId,
                directory = IMAGES,
                name = "${levelId ?: IMAGE_DEFAULT}.$extension"
            )
        }
    }

    object Data {
        object Catalogue {
            const val TYPE = "catalogues"
            const val MEDIA = "media"
            const val DEFAULT_IMAGE_NAME = "img.png"
        }

        object Dataset {
            const val TYPE = "datasets"
            const val DISTRIBUTION = "distribution"

            fun distribution(datasetId: String, filename: String) = FilePath(
                objectType = TYPE,
                objectId = datasetId,
                directory = DISTRIBUTION,
                name = filename
            )
        }
    }

    object Identity {
        object Organization {
            const val TYPE = "organizations"
            const val CERTIFICATE = "certificate"
        }
    }
}
