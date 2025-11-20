import { Box, Button, Text, Menu, Code, Portal } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useVariables } from "../../hooks/variables"
import { useCopyCode } from "../../hooks/extras"
import { useButtonState } from "./useButtonState"

export function ButtonExample() {
    const { isViewScreen, setIsViewScreen } = useVariables()
    const { setButton, label, buttonProps, buttonCodeString } = useButtonState()
    const { copyCode } = useCopyCode()


    return (
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
    )
}