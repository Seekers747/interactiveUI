import { Box, Button, Text, Code, Slider, Menu, Portal } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useCopyCode } from "../../hooks/extras"
import { useSliderState } from "./useSliderState.ts"
import { useVariables } from "../../../imports"

export function SliderExample() {
    const { isViewScreen, setIsViewScreen } = useVariables()
    const { sliderProps, sliderCodeString, setSlider, slider } = useSliderState()
    const { copyCode } = useCopyCode()

    const handleValueChange = (details: { value: number[] }) => {
        setSlider({ ...slider, value: details.value[0] })
    }

    return (
        <Box position="absolute" left="270px" top="510px">
            <Box mb={2} display="flex" flexDirection="row" alignItems="center" gap={4}>
                <Text textStyle="lg" fontWeight="bold">Slider</Text>
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
                                <Menu.Item value="teal" onSelect={() => setSlider(prev => ({ ...prev, colorPalette: 'teal' }))}>Teal</Menu.Item>
                                <Menu.Item value="red" onSelect={() => setSlider(prev => ({ ...prev, colorPalette: 'red' }))}>Red</Menu.Item>
                                <Menu.Item value="blue" onSelect={() => setSlider(prev => ({ ...prev, colorPalette: 'blue' }))}>Blue</Menu.Item>
                                <Menu.Item value="green" onSelect={() => setSlider(prev => ({ ...prev, colorPalette: 'green' }))}>Green</Menu.Item>
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
                                <Menu.Item value="solid" onSelect={() => setSlider(prev => ({ ...prev, variant: 'solid' }))}>Solid</Menu.Item>
                                <Menu.Item value="outline" onSelect={() => setSlider(prev => ({ ...prev, variant: 'outline' }))}>Outline</Menu.Item>
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
                                <Menu.Item value="step" onSelect={() => setSlider(prev => ({ ...prev, step: prev.step === 1 ? 5 : 1 }))}>Change steps</Menu.Item>
                                <Menu.Item value="minMax" onSelect={() => setSlider(prev => ({ ...prev, min: prev.min === 0 ? 50 : 0, max: prev.max === 100 ? 200 : 100 }))}>Change min/max</Menu.Item>
                                <Menu.Item value="size">
                                    <Menu.Root>
                                        <Menu.Trigger asChild>
                                            <Text>Change size</Text>
                                        </Menu.Trigger>
                                        <Portal>
                                            <Menu.Positioner>
                                                <Menu.Content>
                                                    <Menu.Item value="sm" onSelect={() => setSlider(prev => ({ ...prev, size: 'sm' }))}>Small</Menu.Item>
                                                    <Menu.Item value="md" onSelect={() => setSlider(prev => ({ ...prev, size: 'md' }))}>Medium</Menu.Item>
                                                    <Menu.Item value="lg" onSelect={() => setSlider(prev => ({ ...prev, size: 'lg' }))}>Large</Menu.Item>
                                                </Menu.Content>
                                            </Menu.Positioner>
                                        </Portal>
                                    </Menu.Root>
                                </Menu.Item>
                                <Menu.Item value="label">
                                    <Menu.Root>
                                        <Menu.Trigger asChild>
                                            <Text>Change label</Text>
                                        </Menu.Trigger>
                                        <Portal>
                                            <Menu.Positioner>
                                                <Menu.Content>
                                                    <Menu.Item value="sm" onSelect={() => setSlider(prev => ({ ...prev, label: 'Volume' }))}>Volume</Menu.Item>
                                                    <Menu.Item value="md" onSelect={() => setSlider(prev => ({ ...prev, label: 'Brightness' }))}>Brightness</Menu.Item>
                                                    <Menu.Item value="lg" onSelect={() => setSlider(prev => ({ ...prev, label: 'Contrast' }))}>Contrast</Menu.Item>
                                                </Menu.Content>
                                            </Menu.Positioner>
                                        </Portal>
                                    </Menu.Root>
                                </Menu.Item>
                                <Menu.Item value="disabled" onSelect={() => setSlider(prev => ({ ...prev, disabled: !prev.disabled }))}>{slider.disabled ? 'Enable' : 'Disable'} Slider</Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            </Box>

            <Box mt={2} mb={6} display="flex" justifyContent="flex-start" border="solid 1px" borderColor="gray.800" p={4} borderRadius="md" w="645px">
            {isViewScreen ? (
                <>
                    <Slider.Root {...sliderProps} w="300px" onValueChange={handleValueChange}>
                        <Slider.Label>{slider.label}</Slider.Label>
                        <Slider.Control>
                            <Slider.Track>
                                <Slider.Range />
                            </Slider.Track>
                            <Slider.Thumb index={0} />
                        </Slider.Control>
                        <Slider.ValueText />
                    </Slider.Root>
                    <Button asChild position="absolute" right="8px" bottom="30px" variant="ghost" colorPalette="blue" >
                        <a href="https://chakra-ui.com/docs/components/slider" target="_blank" rel="noopener noreferrer">
                            Documentation
                        </a>
                    </Button>
                </>
                ) : (
                    <>
                        <Code colorPalette="blue">{sliderCodeString}</Code>
                        <Button onClick={() => copyCode(sliderCodeString)} ml={4}>
                            <FontAwesomeIcon icon={faCopy} />
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    )
}