import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Dropzone, DropzoneProps } from '@mantine/dropzone'
import { FileRejection } from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import { AddCircleOutlineRounded, InfoOutlined } from '@mui/icons-material'
import { Tooltip } from '@komune-io/g2'
import { mimeTypes } from './mimeTypes'

export type DropError =
    | 'file-too-large'
    | 'too-many-files'
    | 'file-invalid-type'

export interface MultiFileDropzoneProps {
    /**
     * Determine the type of file accepted. By default all the types are allowed
     */
    fileTypesAllowed?: (keyof typeof mimeTypes)[]
    /**
     * The custom error message
     */
    customErrorMessage?: string
    /**
     * isLoading state
     * @default false
     */
    isLoading?: boolean
    /**
     * onAdd files event handler.
     */
    onAdd?: (files: File[]) => void
    /**
     * size of the dropzone
     * @default "normal"
     */
    size?: "small" | "normal"
    /**
     * The props of the dropzone
     */
    dropzoneProps?: Omit<DropzoneProps, 'children' | 'onDrop'>
    multiple?: boolean
}

export const MultiFileDropzone = (props: MultiFileDropzoneProps) => {
    const { customErrorMessage, dropzoneProps, fileTypesAllowed, isLoading = false, onAdd, size = "normal", multiple = false } = props
    const [error, setError] = useState(customErrorMessage)
    const [maxSizeError, setmaxSizeError] = useState(false)
    const dropzoneRef = useRef<HTMLDivElement | null>(null)
    const { t } = useTranslation()

    const downHandler = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Enter') {
                event.currentTarget.click()
            }
        },
        []
    )

    useEffect(() => {
        if (dropzoneRef.current) {
            //@ts-ignore
            dropzoneRef.current.onkeydown = downHandler
        }
    }, [dropzoneRef.current])

    useEffect(() => {
        setError(customErrorMessage)
    }, [customErrorMessage])

    const onDrop = useCallback(
        (files: File[]) => {
            onAdd && onAdd(files)
            setError(undefined)
            setmaxSizeError(false)
        },
        [onAdd]
    )

    const onRejectMemoized = useCallback(
        (fileRejections: FileRejection[]) => {
            const code = fileRejections[0].errors[0].code as DropError
            if (code === "file-too-large") {
                setmaxSizeError(true)
                return
            }
            setError(
                t('unsupportedFormatError', {
                    formats: fileTypesAllowed?.join(', '),
                })
            )
        },
        [t, dropzoneProps?.maxSize, fileTypesAllowed]
    )

    const accept = useMemo(() => {
        if (fileTypesAllowed) {
            const accept = fileTypesAllowed.map((type) => mimeTypes[type])
            if (fileTypesAllowed.includes("xml")) accept.push("text/xml")
            return accept
        }
        return
    }, [fileTypesAllowed])

    return (
        <Box
            sx={{
                width: '100%',
                minWidth: '100px',
                '& .multifileDropzone': {
                    width: '100%',
                    minWidth: '100px',
                    overflow: 'hidden',
                    borderRadius: 1.5,
                    border: '1px dashed #9E9E9E',
                    borderColor: error || maxSizeError ? "error.main" : '#9E9E9E',
                    pointerEvents: isLoading ? 'none' : 'auto',
                    backgroundColor: 'transparent'
                },
                '&:hover .multifileDropzone': {
                    backgroundColor: 'rgb(248, 249, 250)'
                }
            }}
        >
            <Dropzone
                className='multifileDropzone'
                onDrop={onDrop}
                onReject={onRejectMemoized}
                accept={accept}
                ref={dropzoneRef}
                maxSize={10 * 1024 * 1024}
                multiple={multiple}
                disabled={isLoading}
                {...dropzoneProps}
            >
                <DropzoneChildren maxSizeError={maxSizeError} isLoading={isLoading} size={size} error={error} />
            </Dropzone>
        </Box>
    )
}

interface DropzoneChildrenProps {
    size: "small" | "normal"
    isLoading: boolean
    error?: string
    maxSizeError?: boolean
}

export const DropzoneChildren = (props: DropzoneChildrenProps) => {
    const { isLoading, size, error, maxSizeError } = props
    const {t} = useTranslation()
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            gap={1.5}
            direction={size === "small" ? "row" : "column"}
            flexWrap="wrap"
            sx={{
                color: "#9E9E9E",
                p: 2
            }}
        >
            {isLoading ? <CircularProgress size={32} /> : <AddCircleOutlineRounded sx={{ color: "primary.main" }} fontSize='large' />}
            <Typography variant='body2' sx={{color: "currentColor"}} >{t("dragDropText")}</Typography>
            {size === "normal" && <Stack
                gap={1}
                direction="row"
                alignItems="center"
            >
                <Tooltip
                    helperText={"Coucou"}
                >
                    <InfoOutlined color={maxSizeError ? "error" : "inherit"} />
                </Tooltip>
                <Typography color={maxSizeError ? "error" : "inherit"} variant='body2' >{t("maxFileSize", {size: 10})}</Typography>
            </Stack>}
            {error && <Typography color="error" >{error}</Typography>}
        </Stack>
    )
}
