// toast.ts
import { toaster } from '../ui/toaster.tsx'
import { useVariables } from './variables.ts'

export function useToastActions() {
    const { enableToaster, setToastMessage } = useVariables()
  
    const showToast = (toastMessage: string) => {
        if (!enableToaster && toastMessage !== 'Popup enabled') return
        toaster.create({
        description: toastMessage || 'This is a test message',
        type: 'info',
        })
    }

    const mainExplanation = () => {
        const messages = [
        'This page consists of many different elements',
        'You will see a lot of chakra ui components',
        'These components can be customized and the code can be copied',
        'You can toggle the sidebar using the button on the top left',
        'In the sidebar, you can toggle the color mode and enable/disable popups'
        ]

        messages.forEach((msg, index) => {
        setTimeout(() => {
            setToastMessage(msg)
            showToast(msg)
        }, index * 3000)
        })
    }

    return { showToast, mainExplanation }
}
