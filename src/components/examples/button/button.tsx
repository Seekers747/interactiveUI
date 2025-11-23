import { Box, Text } from "@chakra-ui/react"
import { PreviewCode } from "./ui/previewCode"
import { CopyCodeBlock } from './ui/copyCode.tsx'
import { useButtonState } from "./useButtonState"
import { VariantMenu } from './menus/variantMenu.tsx'
import { ColorMenu } from './menus/colorMenu.tsx'
import { MoreMenu } from './menus/moreMenu.tsx'
import { useState } from 'react'

export function ButtonExample() {
    const buttonState = useButtonState()
    const [isViewScreen, setIsViewScreen] = useState(true)

    return (
        <Box position="absolute" left="270px" top="170px">
            <Box mb={2} display="flex" flexDirection="row" alignItems="center" gap={4}>
                <Text textStyle="lg" fontWeight="bold">Buttons</Text>
                <PreviewCode isViewScreen={isViewScreen} setIsViewScreen={setIsViewScreen} />
                <ColorMenu buttonState={buttonState} />
                <VariantMenu buttonState={buttonState} />
                <MoreMenu buttonState={buttonState} />
            </Box>
            <CopyCodeBlock buttonState={buttonState} isViewScreen={isViewScreen} />
        </Box>
    )
}