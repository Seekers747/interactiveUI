import { useColorMode } from "../ui/color-mode.tsx"
import { useState } from 'react'

export function useVariables() {
    const { toggleColorMode } = useColorMode()
    const [sidebar, setSidebar] = useState(false)
    const [enableToaster, setEnableToaster] = useState(true)
    const [toastMessage, setToastMessage] = useState('')
    const [isViewScreen, setIsViewScreen] = useState(true)

    return {
        toggleColorMode,
        sidebar,
        setSidebar,
        enableToaster,
        setEnableToaster,
        toastMessage,
        setToastMessage,
        isViewScreen,
        setIsViewScreen
    }
}
