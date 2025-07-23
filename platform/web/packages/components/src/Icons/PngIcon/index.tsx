import React, { ForwardedRef } from 'react'

export type PngIconProps = React.ComponentPropsWithRef<"img"> & {size?: "small" | "medium" | "big"}

export const Icon = React.forwardRef((props: PngIconProps, ref: ForwardedRef<HTMLImageElement>) => {
    const {style, size = "medium", ...other} = props
    const px = size === "small" ? "12px" : size === "medium" ? "20px" : "24px"
    return (
        <img
            {...other}
            style={{
                width: px,
                height: px,
                ...style
            }}
            alt="Icon"
            ref={ref}
        />
    )
})
