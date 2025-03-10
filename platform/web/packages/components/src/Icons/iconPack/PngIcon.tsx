import React, { ForwardedRef } from 'react'

export const PngIcon = React.forwardRef((props: React.ComponentPropsWithRef<"img">, ref: ForwardedRef<HTMLImageElement>) => {
    const {style, ...other} = props
    return (
        <img
            {...other}
            style={{
                width: "20px",
                height: "20px",
                ...style
            }}
            alt="Icon"
            ref={ref}
        />
    )
})
