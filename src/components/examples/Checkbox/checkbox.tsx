import { Box, Button, Text, Menu, Code, Portal, Checkbox } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useCopyCode } from "../../hooks/extras"
import { useCheckboxState } from "./useCheckboxState"
import { useState } from "../../../imports"

export function CheckboxExample() {

    const { checkbox, setCheckbox, label, checkboxProps, checkboxCodeString } = useCheckboxState()
    const { copyCode } = useCopyCode()
    const [isViewScreen, setIsViewScreen] = useState(true)

    return (
        <Box position="absolute" left="270px" top="340px">
            <Box mb={2} display="flex" flexDirection="row" alignItems="center" gap={4}>
                <Text textStyle="lg" fontWeight="bold">Input</Text>
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
                                <Menu.Item value="teal" onSelect={() => setCheckbox(prev => ({ ...prev, colorPalette: 'teal' }))}>Teal</Menu.Item>
                                <Menu.Item value="red" onSelect={() => setCheckbox(prev => ({ ...prev, colorPalette: 'red' }))}>Red</Menu.Item>
                                <Menu.Item value="blue" onSelect={() => setCheckbox(prev => ({ ...prev, colorPalette: 'blue' }))}>Blue</Menu.Item>
                                <Menu.Item value="green" onSelect={() => setCheckbox(prev => ({ ...prev, colorPalette: 'green' }))}>Green</Menu.Item>
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
                                <Menu.Item value="solid" onSelect={() => setCheckbox(prev => ({ ...prev, variant: 'solid' }))}>Solid</Menu.Item>
                                <Menu.Item value="outline" onSelect={() => setCheckbox(prev => ({ ...prev, variant: 'outline' }))}>Outline</Menu.Item>
                                <Menu.Item value="ghost" onSelect={() => setCheckbox(prev => ({ ...prev, variant: 'subtle' }))}>Ghost</Menu.Item>
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
                                                    <Menu.Item value="xs" onSelect={() => setCheckbox(prev => ({ ...prev, size: 'xs' }))}>Extra Small</Menu.Item>
                                                    <Menu.Item value="sm" onSelect={() => setCheckbox(prev => ({ ...prev, size: 'sm' }))}>Small</Menu.Item>
                                                    <Menu.Item value="md" onSelect={() => setCheckbox(prev => ({ ...prev, size: 'md' }))}>Medium</Menu.Item>
                                                    <Menu.Item value="lg" onSelect={() => setCheckbox(prev => ({ ...prev, size: 'lg' }))}>Large</Menu.Item>
                                                </Menu.Content>
                                            </Menu.Positioner>
                                        </Portal>
                                    </Menu.Root>
                                </Menu.Item>
                                <Menu.Item value="disabled">
                                    <Menu.Root>
                                        <Menu.Trigger asChild>
                                            <Text>Change state</Text>
                                        </Menu.Trigger>
                                        <Portal>
                                            <Menu.Positioner>
                                                <Menu.Content>
                                                    <Menu.Item value="enable" onSelect={() => setCheckbox(prev => ({ ...prev, state: '' }))}>Enable</Menu.Item>
                                                    <Menu.Item value="disable" onSelect={() => setCheckbox(prev => ({ ...prev, state: 'disabled' }))}>Disable</Menu.Item>
                                                    <Menu.Item value="readonly" onSelect={() => setCheckbox(prev => ({ ...prev, state: 'readonly' }))}>Readonly</Menu.Item>
                                                    <Menu.Item value="invalid" onSelect={() => setCheckbox(prev => ({ ...prev, state: 'invalid' }))}>Invalid</Menu.Item>
                                                </Menu.Content>
                                            </Menu.Positioner>
                                        </Portal>
                                    </Menu.Root>
                                </Menu.Item>
                                <Menu.Item value="loading">
                                    <Menu.Root>
                                        <Menu.Trigger asChild>
                                            <Text>Toggle required</Text>
                                        </Menu.Trigger>
                                        <Portal>
                                            <Menu.Positioner>
                                                <Menu.Content>
                                                    <Menu.Item value="enable" onSelect={() => setCheckbox(prev => ({ ...prev, required: true }))}>Enable</Menu.Item>
                                                    <Menu.Item value="disable" onSelect={() => setCheckbox(prev => ({ ...prev, required: false }))}>Disable</Menu.Item>
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
                { isViewScreen ? (
                    <Checkbox.Root 
                        {...(checkboxProps as any)} 
                        checked={checkbox.checked}
                        onCheckedChange={(details) => setCheckbox(prev => ({ ...prev, checked: details.checked }))}
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>{label}</Checkbox.Label>
                    </Checkbox.Root>
                ) : (
                    <><Code>{checkboxCodeString}</Code><Button onClick={() => copyCode(checkboxCodeString)} ml={4}><FontAwesomeIcon icon={faCopy} /></Button></>
                )}
            </Box>
        </Box>
    )
}