import { ProtectedContentOverlay } from './ProtectedContentOverlay';
import { useState } from "react"
import { useExtendedAuth } from '../auth';

interface ProtectedContentOverlayProps {
    isProtected: boolean;
}

export const useProtectionOverlay = (props: ProtectedContentOverlayProps) => {
    const { isProtected } = props;
    const [count, setcount] = useState(0)
    const { keycloak } = useExtendedAuth()

    const cantViewProtected = isProtected && !keycloak.isAuthenticated

    const overlay = cantViewProtected ? <ProtectedContentOverlay key={count} onNeedUpdate={() => setcount(c => c + 1)} /> : null;
    return { overlay };
};
