import * as imports from './buttonImports.ts'

const {
    Box, Text,
    useButtonState, useState,
    ColorMenu, VariantMenu, MoreMenu, SectionScreen, CopyCodeBlock
} = imports

export function ButtonExample() {
    const buttonState = useButtonState()
    const [isViewScreen, setIsViewScreen] = useState(true)

    return (
        <Box position="absolute" left="270px" top="170px">
            <Box mb={2} display="flex" flexDirection="row" alignItems="center" gap={4}>
                <Text textStyle="lg" fontWeight="bold">Buttons</Text>
                <SectionScreen isViewScreen={isViewScreen} setIsViewScreen={setIsViewScreen} />
                <ColorMenu buttonState={buttonState} />
                <VariantMenu buttonState={buttonState} />
                <MoreMenu buttonState={buttonState} />
            </Box>
            <CopyCodeBlock buttonState={buttonState} isViewScreen={isViewScreen} />
        </Box>
    )
}