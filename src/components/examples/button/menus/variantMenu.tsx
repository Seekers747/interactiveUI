import { Button, Menu, Portal } from "@chakra-ui/react";
import { variantOptions } from "./../data/menuItems";


export function VariantMenu({ buttonState }: { buttonState: ReturnType<typeof import("../useButtonState").useButtonState> }) {
    const { setButton } = buttonState

    return (
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
    )
}