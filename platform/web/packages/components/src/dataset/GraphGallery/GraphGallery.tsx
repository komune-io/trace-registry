import {useDatasetGraphSearchQuery} from "domain-components";
import {useMemo} from "react";
import {g2Config} from "@komune-io/g2";
import {Stack} from "@mui/material";
import {ImageCard} from "../../ImageCard";

interface ChartsGalleryProps {
  language: string
  onClickImage: (src: string) => void
  open: boolean
}

export const GraphGallery = (props: ChartsGalleryProps) => {
  const { language, onClickImage, open } = props

  // TODO custom data, need to be generalized
  const datasetGraphSearchQuery = useDatasetGraphSearchQuery({
    query: {
      rootCatalogueIdentifier: "100m-charts",
      datasetType: "rawGraph",
      language: language
    }
  })
  const graphsDisplay = useMemo(() => {
    const datasets = datasetGraphSearchQuery.data?.items ?? []
    console.log("datasetGraphSearchQuery.datasets", datasets)
    return datasets?.map((dataset) => {
      const imageDistribution = dataset.distributions?.find((dist) => dist.mediaType === "image/svg+xml")
      console.log("datasetGraphSearchQuery", dataset.distributions)
      console.log("datasetGraphSearchQuery", imageDistribution)
      if (!imageDistribution) return
      const src = g2Config().platform.url + `/data/datasetDownloadDistribution/${dataset.id}/${imageDistribution.id}`
      return (
        <ImageCard
          imageUrl={src}
          onClick={() => {
            open && onClickImage(src)
          }}
          label={dataset.title}
        />
      )
    })
  }, [datasetGraphSearchQuery.data?.items, onClickImage, open])

  return <Stack
    direction="row"
    gap={3}
    flexWrap="wrap"
    alignItems="flex-start"
  >
    {graphsDisplay}
  </Stack>;
}
