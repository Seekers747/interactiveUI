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
    Code,
    Portal,
    FontAwesomeIcon,
    faCopy,
    useButtonState
  } = imports

function App() {
    const { toggleColorMode } = useColorMode()
    const [sidebar, setSidebar] = useState<boolean>(false)
    const [enableToaster, setEnableToaster] = useState<boolean>(true)
    const [_toastMessage, setToastMessage] = useState<string>('')
    const [isViewScreen, setIsViewScreen] = useState<boolean>(true)
    const { setButton, label, buttonProps, buttonCodeString } = useButtonState()

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

    function copyCode(text: string) {
        const message = 'Code copied to clipboard'
        setToastMessage(message)
        showToast(message)
        navigator.clipboard.writeText(text)
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
                    Better ChakraUI documentation
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
                    <Text textStyle="lg" fontWeight="bold">Buttons</Text>
                    <Button 
                    colorPalette={isViewScreen ? 'gray' : 'none'}
                    variant={isViewScreen ? 'solid' : 'ghost'}
                    bg={isViewScreen ? "gray.600" : "transparent"}
                    onClick={() => setIsViewScreen(true)}>
                        View
                    </Button>
                    <Button 
                    colorPalette={!isViewScreen ? 'gray' : 'none'}
                    variant={!isViewScreen ? 'solid' : 'ghost'}
                    bg={!isViewScreen ? "gray.600" : "transparent"}
                    onClick={() => setIsViewScreen(false)}>
                        Code
                    </Button>

                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button variant="outline">Change color</Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content>
                                    <Menu.Item value="teal" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'teal' }))}>Teal</Menu.Item>
                                    <Menu.Item value="red" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'red' }))}>Red</Menu.Item>
                                    <Menu.Item value="blue" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'blue' }))}>Blue</Menu.Item>
                                    <Menu.Item value="green" onSelect={() => setButton(prev => ({ ...prev, colorPalette: 'green' }))}>Green</Menu.Item>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>

                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button variant="outline">Change variant</Button>
                        </Menu.Trigger>
                        
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content>
                                    <Menu.Item value="solid" onSelect={() => setButton(prev => ({ ...prev, variant: 'solid' }))}>Solid</Menu.Item>
                                    <Menu.Item value="outline" onSelect={() => setButton(prev => ({ ...prev, variant: 'outline' }))}>Outline</Menu.Item>
                                    <Menu.Item value="ghost" onSelect={() => setButton(prev => ({ ...prev, variant: 'ghost' }))}>Ghost</Menu.Item>
                                    <Menu.Item value="link" onSelect={() => setButton(prev => ({ ...prev, variant: 'link' }))}>Link</Menu.Item>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>

                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button variant="outline">More options</Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content>
                                    <Menu.Item value="size">
                                        <Menu.Root>
                                            <Menu.Trigger asChild>
                                                <Text>Change size</Text>
                                            </Menu.Trigger>
                                            <Portal>
                                                <Menu.Positioner>
                                                    <Menu.Content>
                                                        <Menu.Item value="sm" onSelect={() => setButton(prev => ({ ...prev, size: 'sm' }))}>Small</Menu.Item>
                                                        <Menu.Item value="md" onSelect={() => setButton(prev => ({ ...prev, size: 'md' }))}>Medium</Menu.Item>
                                                        <Menu.Item value="lg" onSelect={() => setButton(prev => ({ ...prev, size: 'lg' }))}>Large</Menu.Item>
                                                    </Menu.Content>
                                                </Menu.Positioner>
                                            </Portal>
                                        </Menu.Root>
                                    </Menu.Item>
                                    <Menu.Item value="disabled">
                                        <Menu.Root>
                                            <Menu.Trigger asChild>
                                                <Text>Toggle Disabled</Text>
                                            </Menu.Trigger>
                                            <Portal>
                                                <Menu.Positioner>
                                                    <Menu.Content>
                                                        <Menu.Item value="enable" onSelect={() => setButton(prev => ({ ...prev, disabled: false }))}>Enable</Menu.Item>
                                                        <Menu.Item value="disable" onSelect={() => setButton(prev => ({ ...prev, disabled: true }))}>Disable</Menu.Item>
                                                    </Menu.Content>
                                                </Menu.Positioner>
                                            </Portal>
                                        </Menu.Root>
                                    </Menu.Item>
                                    <Menu.Item value="loading">
                                        <Menu.Root>
                                            <Menu.Trigger asChild>
                                                <Text>Toggle Loading</Text>
                                            </Menu.Trigger>
                                            <Portal>
                                                <Menu.Positioner>
                                                    <Menu.Content>
                                                        <Menu.Item value="enable" onSelect={() => setButton(prev => ({ ...prev, loading: true }))}>Enable</Menu.Item>
                                                        <Menu.Item value="disable" onSelect={() => setButton(prev => ({ ...prev, loading: false }))}>Disable</Menu.Item>
                                                    </Menu.Content>
                                                </Menu.Positioner>
                                            </Portal>
                                        </Menu.Root>
                                    </Menu.Item>
                                    <Menu.Item value="loadingText">
                                        <Menu.Root>
                                            <Menu.Trigger asChild>
                                                <Text>Change Loading Text</Text>
                                            </Menu.Trigger>
                                            <Portal>
                                                <Menu.Positioner>
                                                    <Menu.Content>
                                                        <Menu.Item value="Loading..." onSelect={() => setButton(prev => ({ ...prev, loadingText: 'Loading...' }))}>Loading...</Menu.Item>
                                                        <Menu.Item value="Please wait" onSelect={() => setButton(prev => ({ ...prev, loadingText: 'Please wait' }))}>Please wait</Menu.Item>
                                                        <Menu.Item value="Processing" onSelect={() => setButton(prev => ({ ...prev, loadingText: 'Processing' }))}>Processing</Menu.Item>
                                                    </Menu.Content>
                                                </Menu.Positioner>
                                            </Portal>
                                        </Menu.Root>
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                </Box>

                <Box mt={2} mb={6} display="flex" justifyContent="flex-start" border="solid 1px" borderColor="gray.800" p={4} borderRadius="md" w="645px">
                    { isViewScreen && <Button {...(buttonProps as any)}>{label}</Button> }
                    { !isViewScreen && <><Code>{buttonCodeString}</Code><Button onClick={() => copyCode(buttonCodeString)} ml={4}><FontAwesomeIcon icon={faCopy} /></Button></> }
                </Box>
            </Box>

        </>
    )
}

export default App