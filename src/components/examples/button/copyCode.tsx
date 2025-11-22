import { Button, Box, Code } from "@chakra-ui/react"
import { useCopyCode } from "../../hooks/extras"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from '@fortawesome/free-solid-svg-icons'

export function CopyCodeBlock({ buttonState, isViewScreen }: { buttonState: ReturnType<typeof import("./useButtonState").useButtonState>; isViewScreen: boolean }) {
    const { label, buttonProps, buttonCodeString } = buttonState
    const { copyCode } = useCopyCode()


    return (
        <Box mt={2} mb={6} display="flex" justifyContent="flex-start" border="solid 1px" borderColor="gray.800" p={4} borderRadius="md" w="645px">
            { isViewScreen && <><Button {...(buttonProps as any)}>{label}</Button><Button asChild position="absolute" right="8px" bottom="30px" variant="ghost" colorPalette="blue" >
                <a href="https://chakra-ui.com/docs/components/button" target="_blank" rel="noopener noreferrer">
                    Documentation
                </a>
            </Button>
            </> }
            { !isViewScreen && <><Code colorPalette="blue">{buttonCodeString}</Code><Button onClick={() => copyCode(buttonCodeString)} ml={4}><FontAwesomeIcon icon={faCopy} /></Button></> }
        </Box>
    )
}