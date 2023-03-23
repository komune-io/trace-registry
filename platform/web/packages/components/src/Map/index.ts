import {TFunction} from "i18next"
import { MapProps } from "@smartb/g2"

export const addMapBaseProps = (t: TFunction, props?: any): Partial<MapProps> => ({
    center: [0, 20],
    zoom: 2,
    openFullScreenString: t("openFullScreen"),
    ...props,
    draggableMarkerPlugin: {
        addMarkerString: t("addMarker"),
        canDragString: t("canDrag"),
        useMyPositionString: t("useMyPosition"),
        ...props?.draggableMarkerPlugin
    },
})