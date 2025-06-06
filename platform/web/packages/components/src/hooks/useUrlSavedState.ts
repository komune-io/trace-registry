import { useCallback, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import qs from 'qs'

const retrieveNumber = (value: any) => {
  const number = Number(value)
  if (!isNaN(number)) return number
  return value
}

const unformatFieldValue = (value: any) => {
  if (Array.isArray(value)) return value
  return retrieveNumber(value)
}

interface UseUrlSavedStateParams<State extends {}> {
  initialState?: Partial<State>
}

export const useUrlSavedState = <State extends {} = {}>(params?: UseUrlSavedStateParams<State>) => {
  const {initialState} = params ?? {}

  const [searchParams, setSearchParams] = useSearchParams()

  const stateRef = useRef<State>({} as State)

  const state = useMemo(() => {
    const params = qs.parse(searchParams.toString()) as State
    const state = { ...initialState} as State
    for (const fieldName in params) {
      state[fieldName] = unformatFieldValue(params[fieldName])
    }
    stateRef.current = state
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
          addQueryPrefix: true,
          arrayFormat: 'indices',
          serializeDate: (date) => date.toISOString()
        })
      )
    },
    [setSearchParams]
  )

  const changeValueCallback = useCallback(
    (valueKey: keyof State) => (value: any) => {
      changeState({...stateRef.current, [valueKey]: value})
    },
    [changeState]
  )


  return {
    state,
    stateRef,
    changeState,
    changeValueCallback
  }
}
