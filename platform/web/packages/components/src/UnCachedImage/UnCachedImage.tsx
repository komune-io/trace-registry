import React, { ForwardedRef, useState } from 'react'

export const UnCachedImage = React.forwardRef((props: React.ComponentPropsWithRef<"img">, ref: ForwardedRef<HTMLImageElement>) => {
    const { src, ...other } = props
    const [timeStamp] = useState(new Date().getTime())
    return (
        <img
            src={src + "?t=" + timeStamp}
            {...other}
            ref={ref}
        />
    )
})
