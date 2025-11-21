import * as imports from './buttonImports.ts'

const {
    Box, Button, Text, Menu, Code, Portal,
    useVariables, useCopyCode, useButtonState,
    FontAwesomeIcon, faCopy,
    colorOptions, variantOptions, sizeOptions, toggleButtonOptions, toggleLoadingButtonOptions, loadingButtonOptions
} = imports

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
                                {colorOptions.map(option => (
                                    <Menu.Item key={option.value} value={option.value} onSelect={() => setButton(prev => ({ ...prev, colorPalette: option.value }))}>
                                        {option.label}
                                    </Menu.Item>
                                ))}
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
                                {variantOptions.map(option => (
                                    <Menu.Item key={option.value} value={option.value} onSelect={() => setButton(prev => ({ ...prev, variant: option.value as "solid" | "outline" | "ghost" | "link" }))}>
                                        {option.label}
                                    </Menu.Item>
                                ))}
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
                                                    {sizeOptions.map(option => (
                                                        <Menu.Item key={option.value} value={option.value} onSelect={() => setButton(prev => ({ ...prev, size: option.value as "sm" | "md" | "lg" }))}>
                                                            {option.label}
                                                        </Menu.Item>
                                                    ))}
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
                                                    {toggleButtonOptions.map(option => (
                                                        <Menu.Item key={option.value.toString()} value={option.value.toString()} onSelect={() => setButton(prev => ({ ...prev, disabled: !option.value }))}>
                                                            {option.label}
                                                        </Menu.Item>
                                                    ))}
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
                                                    {toggleLoadingButtonOptions.map(option => (
                                                        <Menu.Item key={option.value.toString()} value={option.value.toString()} onSelect={() => setButton(prev => ({ ...prev, loading: option.value }))}>
                                                            {option.label}
                                                        </Menu.Item>
                                                    ))}
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
                                                    {loadingButtonOptions.map(option => (
                                                        <Menu.Item key={option.value} value={option.value} onSelect={() => setButton(prev => ({ ...prev, loadingText: option.value }))}>
                                                            {option.label}
                                                        </Menu.Item>
                                                    ))}
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
                { isViewScreen && <><Button {...(buttonProps as any)}>{label}</Button><Button asChild position="absolute" right="8px" bottom="30px" variant="ghost" colorPalette="blue" >
                    <a href="https://chakra-ui.com/docs/components/button" target="_blank" rel="noopener noreferrer">
                        Documentation
                    </a>
                </Button>
                </> }
                { !isViewScreen && <><Code colorPalette="blue">{buttonCodeString}</Code><Button onClick={() => copyCode(buttonCodeString)} ml={4}><FontAwesomeIcon icon={faCopy} /></Button></> }
            </Box>
        </Box>
    )
}