import { Dialog, DialogProps, SxProps, Theme } from '@mui/material';
import { ReactNode, useCallback, useEffect } from "react";
import { config } from 'components'
import { useNavigate } from 'react-router-dom';

export interface DialogPageProps extends Partial<DialogProps> {
    title?: string
    children?: ReactNode
    sx?: SxProps<Theme>
    goBackUrl: string
}

export const DialogPage = (props: DialogPageProps) => {
    const { title, children, sx, goBackUrl, ...other } = props

    const navigate = useNavigate()

    const onClose = useCallback(
        () => {
            navigate(goBackUrl)
        },
        [navigate, goBackUrl],
    )

    useEffect(() => {
        if (title) {
            document.title = config().title + " | " + title
        } else {
            document.title = config().title ?? ""
        }
    }, [title])

    return (
        <Dialog
            {...other}
            fullScreen
            open
            onClose={onClose}
            PaperProps={{
                className: "scroll-container",
            }}
            sx={{
                ...sx,
                "& .MuiDialog-paper": {
                    p: 3,
                    pb: 12,
                    display: "flex",
                    gap: 8,
                    ...sx?.['& .MuiDialog-paper']
                },
            }}

        >
            {children}
        </Dialog>
    )
}
