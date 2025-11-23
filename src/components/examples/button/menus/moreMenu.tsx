import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { loadingButtonOptions, sizeOptions, toggleButtonOptions, toggleLoadingButtonOptions } from "./../data/menuItems";


export function MoreMenu({ buttonState } : { buttonState: ReturnType<typeof import("../useButtonState").useButtonState> }) {
    const { setButton } = buttonState

    return (
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
    )
}