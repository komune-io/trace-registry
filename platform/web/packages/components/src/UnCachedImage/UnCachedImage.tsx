import React, { useState } from 'react'

export const UnCachedImage = (props: React.ComponentPropsWithRef<"img">) => {
    const { src, ...other } = props
    const [timeStamp] = useState(new Date().getTime())
    return (
        <img
            src={src + "?t=" + timeStamp}
            {...other}
        />
    )
}
