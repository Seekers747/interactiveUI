import './App.css'
import * as imports from './imports.tsx'

const {
    Box,
    Button,
    Heading,
    Text,
    useColorMode,
    useState,
    toaster,
    Menu,
  } = imports

function App() {
    const { toggleColorMode } = useColorMode()
    const [sidebar, setSidebar] = useState<boolean>(false)
    const [enableToaster, setEnableToaster] = useState<boolean>(true)
    const [_toastMessage, setToastMessage] = useState<string>('')

    interface ButtonState {
        colorPalette?: string
        variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'
        size?: 'sm' | 'md' | 'lg'
        isLoading?: boolean
        isDisabled?: boolean
        borderRadius?: string | number
        label?: string
    }

    const [button, setButton] = useState<ButtonState>({
        colorPalette: 'teal',
        variant: 'solid',
        size: 'md',
        isLoading: false,
        isDisabled: false,
        borderRadius: 'md',
        label: 'Click me',
    })

    const { label, ...buttonProps } = button
      

    const showToast = (toastMessage: string) => {
        if (!enableToaster && toastMessage !== 'Popup enabled') return
        toaster.create({
        description: toastMessage || 'This is a test message',
        type: 'info',
        })
    }

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

    function mainExplanation() {
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

    return (
        <>
            <Button position="absolute" top={4} left={4} onClick={() => setSidebar(s => !s)}>
                Toggle Sidebar
            </Button>

            {sidebar && (
                <Box
                position="fixed"
                top="0"
                left="0"
                height="100vh"
                width="250px"
                bg="gray.200"
                boxShadow="md"
                zIndex={1000}
                padding={4}
                >
                    <Button w="max-content" display={'flex'} justifyContent={'flex-start'} mb={4} onClick={() => setSidebar(false)}>
                        Close Sidebar
                    </Button>

                    <Heading as="h2" size="md" textAlign="center">
                        Settings
                    </Heading>

                    <Box mt={4} display="flex" flexDirection="column" gap={4}>
                        <Button  onClick={() => toggleTheme()}>
                        Toggle Color Mode
                        </Button>
                        <Button onClick={() => toggleToaster()}>
                            {enableToaster ? 'Disable' : 'Enable'} Popup
                        </Button>
                    </Box>
                </Box>
            )}

            <Box mt={4} textAlign="center">
                <Heading as="h1" size="xl" mb={4}>
                    Welcome to the Interactive UI App
                </Heading>
                <Button
                    colorPalette="green"
                    variant="solid"
                    onClick={() => mainExplanation()}
                >
                    Page Explanation
                </Button>
            </Box>

            <Box position="absolute" left="270px" top="170px">
                <Box mb={2} display="flex" flexDirection="row" alignItems="center" gap={4}>
                    <Text textStyle="lg" fontWeight="bold">
                        Buttons
                    </Text>

                    <Menu.Root>
                        <Menu.Trigger as={Box}>
                            <Button variant="outline">Change color</Button>
                        </Menu.Trigger>

                        <Menu.Content>
                            <Menu.Item value="teal" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'teal' }))}>Teal</Menu.Item>
                            <Menu.Item value="red" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'red' }))}>Red</Menu.Item>
                            <Menu.Item value="blue" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'blue' }))}>Blue</Menu.Item>
                            <Menu.Item value="green" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'green' }))}>Green</Menu.Item>
                        </Menu.Content>
                    </Menu.Root>

                    <Menu.Root>
                        <Menu.Trigger as={Box}>
                            <Button variant="outline">Change variant</Button>
                        </Menu.Trigger>
                        
                        <Menu.Content>
                            <Menu.Item value="solid" onSelect={() => setButton(prev => ({ ...prev, variant: 'solid' }))}>Solid</Menu.Item>
                            <Menu.Item value="outline" onSelect={() => setButton(prev => ({ ...prev, variant: 'outline' }))}>Outline</Menu.Item>
                            <Menu.Item value="ghost" onSelect={() => setButton(prev => ({ ...prev, variant: 'ghost' }))}>Ghost</Menu.Item>
                            <Menu.Item value="link" onSelect={() => setButton(prev => ({ ...prev, variant: 'link' }))}>Link</Menu.Item>
                        </Menu.Content>
                    </Menu.Root>

                    <Menu.Root>
                        <Menu.Trigger as={Box}>
                            <Button variant="outline">Change size</Button>
                        </Menu.Trigger>

                        <Menu.Content>
                            <Menu.Item value="sm" onSelect={() => setButton(prev => ({ ...prev, size: 'sm' }))}>Small</Menu.Item>
                            <Menu.Item value="md" onSelect={() => setButton(prev => ({ ...prev, size: 'md' }))}>Medium</Menu.Item>
                            <Menu.Item value="lg" onSelect={() => setButton(prev => ({ ...prev, size: 'lg' }))}>Large</Menu.Item>
                        </Menu.Content>
                    </Menu.Root>
                </Box>

                <Box mt={2} mb={6} display="flex" justifyContent="flex-start" border="solid 1px" borderColor="gray.300" p={4} borderRadius="md" w="500px">
                    <Button {...(buttonProps as any)}>{label}</Button>
                </Box>
            </Box>

        </>
    )
}

export default App
