import { useCallback, useEffect, useState } from 'react'

export interface useRefetchOnDismountParams {
    refetch: () => void
}

export const useRefetchOnDismount = (params: useRefetchOnDismountParams) => {
    const {refetch} = params
    const [refetchOnDismount, setRefetchOnDismount] = useState(false)
    
    useEffect(() => {
        return () => {
          if (refetchOnDismount) {
            refetch()
          }
        }
      }, [refetchOnDismount])

      const doRefetchOnDismount = useCallback(
        () => {
          setRefetchOnDismount(true)
        },
        [],
      )
      
      return {
        setRefetchOnDismount,
        refetchOnDismount,
        doRefetchOnDismount
      }
}
