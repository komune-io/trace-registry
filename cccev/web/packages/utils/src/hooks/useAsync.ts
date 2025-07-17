import { useCallback, useEffect, useState } from "react";
import { AsyncStatus } from ".";

export const useAsyncFunction = (asyncFunction: () => Promise<void>, immediate: boolean = true): { execute: () => void, status: AsyncStatus } => {
    const [status, setStatus] = useState<AsyncStatus>('IDLE');

    const execute = useCallback(async () => {
        setStatus('PENDING');
        await asyncFunction()
        setStatus('SUCCESS');
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status };
};

interface AsyncResponse<T = any> {
    execute: () => void,
    status: AsyncStatus,
    result?: T;
}

export const useAsyncResponse = <T = any>(asyncResponse: () => Promise<T>, immediate: boolean = true): AsyncResponse<T> => {
    const [status, setStatus] = useState<AsyncStatus>('IDLE');
    const [result, setResult] = useState<T | undefined>(undefined);

    const execute = useCallback(async () => {
        setStatus('PENDING');
        asyncResponse()
            .then(response => {
                setResult(response)
                setStatus('SUCCESS');
            })
    }, [asyncResponse]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, result };
};
