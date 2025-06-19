import React, {forwardRef} from 'react'
import {Dialog, DialogProps, Stack, Typography} from '@mui/material'
import {CloseRounded} from '@mui/icons-material'
import {CustomButton} from '../CustomButton'
import {useTranslation} from 'react-i18next'

export interface TmsPopUpProps extends Omit<DialogProps, "title"> {
  /**
   * Define if the po-up is open
   */
  open: boolean
  /**
  * The title of the PopUp
  */
  title?: React.ReactNode
  /**
   * The event called when the user request to close the pop-up
   */
  onClose: (event: React.ChangeEvent<{}>) => void
  /**
   * The content that will be displayed in the body of the pop-up
   */
  children?: React.ReactNode
  onCancel?: () => void
  cancelText?: string
  onSave?: () => void
  saveText?: string
}

const TmsPopUpBase = (
  props: TmsPopUpProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const {
    open,
    onClose,
    children,
    className,
    title,
    PaperProps,
    sx,
    onCancel,
    cancelText,
    onSave,
    saveText,
    ...other
  } = props

  const isTextTitle = typeof title === "string"
  const {t} = useTranslation()

  return (
    <Dialog
      ref={ref}
      open={open}
      onClose={onClose}
      PaperProps={{
        ...PaperProps,
        elevation: 12,
        sx: {
          borderRadius: 1.5,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "unset",
          width: 500,
          ...sx,
        }
      }}
      {...other}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {
          title ? isTextTitle ?
            <Typography
              variant='h6'
            >
              {title}
            </Typography>
            :
            title
            :
            <div />
        }
        <CloseRounded
          sx={{
            cursor: 'pointer',
            color: '#676879'
          }}
          fontSize='small'
          onClick={onClose}
        />
      </Stack>
      {children}
      {(onSave || onCancel) && (
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={2}
        >
          {onCancel && <CustomButton
            onClick={onCancel}
            variant='text'
          >
            {cancelText ?? t("cancel")}
          </CustomButton>}
          {onSave && <CustomButton
            onClick={onSave}
          >
            {saveText ?? t("save")}
          </CustomButton>}
        </Stack>
      )}
    </Dialog>
  )
}

export const TmsPopUp = forwardRef(TmsPopUpBase) as typeof TmsPopUpBase
