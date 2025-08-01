import { Stack, StackProps } from '@mui/material'
import { useEffect, useRef, useState } from 'react';

export interface StickyContainerProps extends StackProps {

}

export const StickyContainer = (props: StickyContainerProps) => {
    const { children, sx, ...rest } = props
    const ref = useRef<HTMLDivElement>(null);
    const [isAtInitialPosition, setIsAtInitialPosition] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            setIsAtInitialPosition(rect.bottom < window.innerHeight - 70)
        }
        const scrollContainer = document.querySelector('.scroll-container') as HTMLElement | null;
        scrollContainer?.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => scrollContainer?.removeEventListener('scroll', handleScroll)
    }, [])

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
                bottom: "-70px",
                backdropFilter: !isAtInitialPosition ? "blur(15px)" : undefined,
                padding: 2,
                borderRadius: 1,
                boxShadow: !isAtInitialPosition ? 1 : undefined,
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
