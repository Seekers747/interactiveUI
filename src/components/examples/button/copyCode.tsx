import { Button, Box, Code } from "@chakra-ui/react"
import { useCopyCode } from "../../hooks/extras"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import type { ButtonProps } from "@chakra-ui/react"

export function CopyCodeBlock({ buttonState, isViewScreen }: { buttonState: ReturnType<typeof import("./useButtonState").useButtonState>; isViewScreen: boolean }) {
  const { label, buttonProps, buttonCodeString } = buttonState
  const { copyCode } = useCopyCode()

  const chakraButtonProps = buttonProps as unknown as ButtonProps

  return (
    <Box mt={2} mb={6} display="flex" justifyContent="flex-start" border="solid 1px" borderColor="gray.800" p={4} borderRadius="md" w="645px" position="relative">
      { isViewScreen && (
        <>
          <Button {...chakraButtonProps}>{label}</Button>
          <Button asChild position="absolute" right="8px" bottom="8px" variant="ghost" colorPalette="blue" >
            <a href="https://chakra-ui.com/docs/components/button" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </Button>
        </>
      ) }
      { !isViewScreen && (
        <>
          <Code>{buttonCodeString}</Code>
          <Button onClick={() => copyCode(buttonCodeString)} ml={4} aria-label="Copy code"><FontAwesomeIcon icon={faCopy} /></Button>
        </>
      ) }
    </Box>
  )
}