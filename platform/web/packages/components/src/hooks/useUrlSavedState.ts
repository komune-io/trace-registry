import { useCallback, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'
import { setIn } from '@komune-io/g2'

const retrieveNumber = (value: any) => {
  const number = Number(value)
  if (!isNaN(number)) return number
  return value
}

const unformatFieldValue = (value: any) => {
  if (value === "") return value
  if (Array.isArray(value)) return value
  return retrieveNumber(value)
}

interface UseUrlSavedStateParams<State extends {}> {
  initialState?: Partial<State>
  writeUrl?: boolean
}

export const useUrlSavedState = <State extends {} = {}>(params?: UseUrlSavedStateParams<State>) => {
  const { initialState, writeUrl = true } = params ?? {}

  const [searchParams, setSearchParams] = writeUrl ? useSearchParams() : useState("")
  const [validatedState, setValidatedState] = useState<{ sent: boolean, state: State }>({ sent: false, state: {} as State })

  const stateRef = useRef<State>({} as State)

  const state = useMemo(() => {
    const params = qs.parse(searchParams.toString()) as State
    const state = { ...initialState } as State
    for (const fieldName in params) {
      state[fieldName] = unformatFieldValue(params[fieldName])
    }
    stateRef.current = state
    if (!validatedState.sent) {
      setValidatedState({ sent: true, state })
    }
    return state
  }, [initialState, searchParams])

  const changeState = useCallback(
    (newState: State) => {
      const cleanState: State = {} as State

      for (const key in newState) {
        const value: any = newState[key]
        if ((typeof value === 'number' || !!value) && value.length !== 0) {
          cleanState[key] = value
        }
      }
      setSearchParams(
        qs.stringify(cleanState, {
          addQueryPrefix: false,
          arrayFormat: 'indices',
          serializeDate: (date) => date.toISOString()
        })
      )
    },
    [setSearchParams]
  )

  const onValidate = useCallback(
    () => {
      setValidatedState({ sent: true, state: stateRef.current })
    },
    []
  )

  const changeValueCallback = useCallback(
    (valueKey: keyof State, shouldValidate?: boolean) => (value: any) => {
      //@ts-ignore
      if (valueKey !== "offset" && valueKey !== "limit" && stateRef.current.offset !== 0) {
        changeState(setIn({ ...stateRef.current, offset: 0 }, valueKey as string, value))
      } else {
        changeState(setIn(stateRef.current, valueKey as string, value))
      }
      if (shouldValidate) {
        setValidatedState({ sent: false, state: stateRef.current })
      }
    },
    [changeState]
  )

  const onClear = useCallback(
    () => {
      const nextState = (initialState ?? {}) as State
      changeState(nextState)
      setValidatedState({ sent: true, state: nextState })
    },
    [initialState]
  )

  return {
    state,
    stateRef,
    changeState,
    changeValueCallback,
    validatedState: validatedState.state,
    onValidate,
    onClear
  }
}
