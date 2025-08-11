import { Stack, StackProps } from '@mui/material'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface StickyContainerProps extends StackProps {
    bottomStick?: number
    alwaysElevated?: boolean
}

export const StickyContainer = (props: StickyContainerProps) => {
    const { children, sx, bottomStick = 70, alwaysElevated = false, ...rest } = props
    const ref = useRef<HTMLDivElement>(null);
    const [isAtInitialPosition, setIsAtInitialPosition] = useState(true);

    useLayoutEffect(() => {
        if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            setIsAtInitialPosition(rect.bottom < window.innerHeight - bottomStick)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            setIsAtInitialPosition(rect.bottom < window.innerHeight - bottomStick)
        }
        const scrollContainers = document.querySelectorAll('.scroll-container')
        const scrollContainer = scrollContainers[scrollContainers.length - 1] as HTMLElement | null;
        scrollContainer?.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => scrollContainer?.removeEventListener('scroll', handleScroll)
    }, [bottomStick])

    return (
        <Stack
            ref={ref}
            alignItems="center"
            direction="row"
            width="100%"
            justifyContent="flex-end"
            gap={2}
            sx={{
                position: "sticky",
                bottom: `-${bottomStick}px`,
                backdropFilter: !isAtInitialPosition || alwaysElevated ? "blur(15px)" : undefined,
                padding: 2,
                borderRadius: 1,
                boxShadow: !isAtInitialPosition || alwaysElevated ? 1 : undefined,
                zIndex: 11,
                transition: "0.3s",
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Stack>
    )
}
