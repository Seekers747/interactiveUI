// import './App.css'
// import { Box, Button, Heading } from '@chakra-ui/react'
// import { useColorMode } from "./components/ui/color-mode.tsx"
// import { toaster } from "./components/ui/toaster.tsx"
// import { useState } from 'react'

// function App() {
//     const { toggleColorMode } = useColorMode()
//     const [sidebar, setSidebar] = useState(false)
//     const [enableToaster, setEnableToaster] = useState(true)

//     return (
//         <>
//             <Button position={"absolute"} top={"4"} left={"4"} onClick={() => setSidebar(!sidebar)}>
//                 Toggle Sidebar
//             </Button>
//             <Button colorPalette={'blue'} variant={'solid'}
//                 onClick={() =>
//                     toaster.create({
//                     description: "I am a toast message",
//                     type: "info",
//                     })
//                 }>
//                 Show message
//             </Button>
//             {sidebar && 
//                 <Box position={"fixed"} top={"0"} left={"0"} height={"100vh"} width={"250px"} bg={"gray.200"} boxShadow={"md"} zIndex={1000} padding={"4"}>
//                     <Button width={"100%"} mb={"4"} onClick={() => setSidebar(false)}>Close Sidebar</Button>
//                     <Heading as="h2" size="md" textAlign={"center"}>Settings</Heading>
//                     <Box marginTop={"8"}>
//                         <Button variant={'outline'} onClick={toggleColorMode}>Toggle Color Mode</Button>
//                     </Box>
//                 </Box>
//             }
//         </>
//     )
// }

// export default App
import './App.css'
import { Box, Button, Heading } from '@chakra-ui/react'
import { useColorMode } from "./components/ui/color-mode.tsx"
import { useState } from 'react'
import { toaster } from "./components/ui/toaster.tsx"
// If you prefer your custom toaster, import it instead:
// import { toaster } from "./components/ui/toaster"

function App() {
  const { toggleColorMode } = useColorMode()
  const [sidebar, setSidebar] = useState<boolean>(false)
  const [enableToaster, setEnableToaster] = useState<boolean>(true)

  const showToast = () => {
    if (!enableToaster) return
    toaster.create({
      description: 'I am a toast message',
      type: 'info',
    })
  }

  return (
    <>
      <Button position="absolute" top={4} left={4} onClick={() => setSidebar(s => !s)}>
        Toggle Sidebar
      </Button>

      <Button
        colorPalette="blue"
        variant="solid"
        onClick={showToast}
        disabled={!enableToaster}
        aria-disabled={!enableToaster}
      >
        Show message
      </Button>

      {sidebar && (
        <Box
          position="fixed"
          top="0"
          left="0"
          height="100vh"
          width="250px"
          bg="gray.200"
          boxShadow="md"
          zIndex={1000}
          padding={4}
        >
          <Button width="100%" mb={4} onClick={() => setSidebar(false)}>
            Close Sidebar
          </Button>

          <Heading as="h2" size="md" textAlign="center">
            Settings
          </Heading>

          <Box mt={8} display="flex" flexDirection="column" gap={4}>
            <Button  onClick={toggleColorMode}>
              Toggle Color Mode
            </Button>
            <Button onClick={() => setEnableToaster(false)}>
              Enable Toaster
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}

export default App
