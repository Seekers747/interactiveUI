import { useVariables } from './variables.ts'
import { useToastActions } from './toast.ts'

export function useToggles() {
    const {
        toggleColorMode,
        enableToaster,
        setEnableToaster,
        setToastMessage
    } = useVariables()

    const { showToast } = useToastActions()

    function toggleToaster() {
        const newEnabled = !enableToaster
        setEnableToaster(newEnabled)

        const message = newEnabled ? 'Popup enabled' : 'Popup disabled'
        setToastMessage(message)
        showToast(message)
    }

    function toggleTheme() {
        const message = 'Theme toggled'
        setToastMessage(message)
        showToast(message)
        toggleColorMode()
    }

    return { toggleToaster, toggleTheme }
}
