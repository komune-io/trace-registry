import {useCatalogueDraftGetQuery} from "domain-components";
import {useMemo} from "react";
import {g2Config} from "@komune-io/g2";
import {Stack} from "@mui/material";
import {ImageCard} from "../../ImageCard";

interface ResourceGalleryProps {
  draftId: string
  onClickImage: (src: string) => void
  open: boolean
}

export const ResourceGallery = (props: ResourceGalleryProps) => {
  const { draftId, onClickImage, open } = props

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId
    },
  })

  const draft = catalogueDraftQuery.data?.item

  const graphsDisplay = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.datasets?.map((dataset) => {
    const imageDistribution = dataset.distributions?.find((dist) => dist.mediaType === "image/svg+xml")
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
  }), [draft, onClickImage, open])

  return <Stack
    direction="row"
    gap={3}
    flexWrap="wrap"
    alignItems="flex-start"
  >
    {graphsDisplay}
  </Stack>;
}
