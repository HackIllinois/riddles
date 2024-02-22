import { ChakraProvider, theme } from "@chakra-ui/react"
import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./routes/Home"


function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
