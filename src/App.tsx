import { ChakraProvider, theme } from "@chakra-ui/react"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"

import Auth from "./routes/Auth"
import Home from "./routes/Home"
import Questions from "./routes/Questions"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/auth/" element = {<Auth />}> </Route>
          <Route path="/questions/" element = {<Questions />}> </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
