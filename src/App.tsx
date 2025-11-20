import * as imports from './imports.ts'

const {
    Box,
    Button,
    Heading,
    useState,
    ButtonExample,
    useToggles,
    useVariables,
    useToastActions
  } = imports

function App() {
    const { toggleToaster, toggleTheme } = useToggles()
    const [sidebar, setSidebar] = useState<boolean>(false)
    const { enableToaster } = useVariables()
    const { mainExplanation } = useToastActions()

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

            <ButtonExample />
        </>
    )
}

export default App