import React, { useCallback, useMemo, useState } from 'react'
import { Typography } from '@mui/material'
import { TmsPopUp, TmsPopUpProps } from './TmsPopUp'
import { TextField, Actions, Action, BasicProps, MergeMuiElementProps } from '@komune-io/g2'
import { cx } from '@emotion/css'

interface TmsConfirmationPopUpClasses {
  strongConfirmationText?: string
  textField?: string
}

interface TmsConfirmationPopUpStyles {
  strongConfirmationText?: React.CSSProperties
  textField?: React.CSSProperties
}

export type TmsConfirmationPopUpVariant = 'validation' | 'deletion'

export interface TmsConfirmationPopUpBasicProps extends BasicProps {
  /**
   * The event called when the user request to close the pop-up
   */
  onClose: (event: React.ChangeEvent<{}>) => void
  /**
   * The event called when the user request to confirm
   */
  onConfirm: (event: React.ChangeEvent<{}>) => void
  /**
   * Define if the po-up is open
   *
   * @default false
   */
  open: boolean
  /**
   * The content of the popup if `strongConfirmation` is false
   */
  children?: React.ReactNode
  /**
   * If true the user will have to copy a word in a textField in order to confirm
   *
   * @default false
   */
  strongConfirmation?: boolean
  /**
   * The text displayed if the `strongConfirmation` is true
   *
   * @default (<> Please confirm by typing the word: <strong>confirmation</strong> in the field below: </> )
   */
  strongConfirmationText?: React.ReactNode
  /**
   * The text to write in the textfield in order to confirm
   *
   * @default "confirmation"
   */
  strongConfirmationWord?: string
  /**
   * The text displayed if the textField value is wrong
   *
   * @default "The word typed is wrong"
   */
  strongConfirmationErrorText?: string
  /**
   * The text insert in the confirm button
   *
   * @default 'Confirm'
   */
  validateText?: string
  /**
   * The text insert in the cancel button
   *
   * @default 'Cancel'
   */
  cancelText?: string
  /**
   * The classes applied to the different part of the component
   */
  classes?: TmsConfirmationPopUpClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: TmsConfirmationPopUpStyles
  /**
   * The styles variations options.
   * @default 'validation'
   */
  variant?: TmsConfirmationPopUpVariant
}

export type TmsConfirmationPopUpProps = MergeMuiElementProps<
  TmsPopUpProps,
  TmsConfirmationPopUpBasicProps
>

export const TmsConfirmationPopUp = (props: TmsConfirmationPopUpProps) => {
  const {
    onClose,
    onConfirm,
    open = false,
    children,
    strongConfirmation = false,
    strongConfirmationText = (
      <>
        Please confirm by typing the word: <strong>confirmation</strong> in the
        field below:
      </>
    ),
    strongConfirmationWord = 'confirmation',
    strongConfirmationErrorText = 'The word typed is wrong',
    validateText = 'Confirm',
    cancelText = 'Cancel',
    classes,
    styles,
    className,
    variant,
    ...other
  } = props
  const [value, setValue] = useState('')
  const [error, setError] = useState(strongConfirmation)

  const onValueChange = useCallback(
    (value: string) => {
      setValue(value)
      if (value === strongConfirmationWord) setError(false)
      else setError(true)
    },
    [strongConfirmationWord]
  )

  const handleClose = useCallback(
    (event: React.ChangeEvent<{}>) => {
      setValue('')
      onClose(event)
    },
    [onClose]
  )

  const actions = useMemo(
    (): Action[] => [
      {
        key: 'TmsConfirmationPopUp-' + cancelText,
        label: cancelText,
        variant: 'text',
        onClick: handleClose
      },
      {
        key: 'TmsConfirmationPopUp-' + validateText,
        label: validateText,
        onClick: onConfirm,
        color: variant === 'deletion' ? "error" : "success",
        disabled: error
      }
    ],
    [validateText, cancelText, handleClose, onConfirm, error, variant]
  )

  return (
    <TmsPopUp
      open={open}
      onClose={handleClose}
      className={cx('AruiTmsConfirmationPopUp-strongConfirmationText', className)}
      {...other}
    >
      {strongConfirmation ? (
        <>
          <Typography
            className={cx(
              'AruiTmsConfirmationPopUp-strongConfirmationText',
              classes?.strongConfirmationText
            )}
            style={styles?.strongConfirmationText}
            variant='body1'
          >
            {strongConfirmationText}
          </Typography>
          <TextField
            value={value}
            onChange={onValueChange}
            size='small'
            error={error}
            errorMessage={strongConfirmationErrorText}
            className={cx(
              'AruiTmsConfirmationPopUp-textField',
              classes?.textField
            )}
            style={styles?.textField}
          />
        </>
      ) : (
        children
      )}
      <Actions
        actions={actions}
      />
    </TmsPopUp>
  )
}
