import { useVariables } from "./variables.ts"
import { useToastActions } from "./toast.ts"

export function useCopyCode() {
    const { setToastMessage } = useVariables()
    const { showToast } = useToastActions()

    function copyCode(text: string) {
        const message = 'Code copied to clipboard'
        setToastMessage(message)
        showToast(message)
        navigator.clipboard.writeText(text)
    }

    return { copyCode }
}
