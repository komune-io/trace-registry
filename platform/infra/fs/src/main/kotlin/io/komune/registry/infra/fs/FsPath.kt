package io.komune.registry.infra.fs

import io.komune.fs.s2.file.domain.model.FilePath

object FsPath {
    object Catalogue {
        const val TYPE = "catalogues"
        const val MEDIA = "media"
        const val DEFAULT_IMAGE_NAME = "img.png"
    }

    object Dataset {
        const val TYPE = "datasets"
        const val MEDIA = "media"
        const val DISTRIBUTION = "distribution"
        const val DEFAULT_IMAGE_NAME = "img.png"

        fun distribution(datasetId: String, filename: String) = FilePath(
            objectType = TYPE,
            objectId = datasetId,
            directory = DISTRIBUTION,
            name = filename
        )
    }

    object Organization {
        const val TYPE = "organizations"
        const val CERTIFICATE = "certificate"
    }
}
