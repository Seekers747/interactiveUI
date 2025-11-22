import { Button } from "@chakra-ui/react"

export function SectionScreen({ isViewScreen, setIsViewScreen }: { isViewScreen: boolean; setIsViewScreen: (value: boolean) => void }) {
    return (
        <>
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
        </>
    )
}