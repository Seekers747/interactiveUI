import { Button, Menu, Portal } from "@chakra-ui/react";
import { colorOptions } from "./../data/menuItems";

export function ColorMenu({ buttonState }: { buttonState: ReturnType<typeof import("../useButtonState").useButtonState> }) {
    const { setButton } = buttonState

    return (
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
    )
}