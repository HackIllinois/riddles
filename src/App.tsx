import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Auth from "./routes/Auth"
import Home from "./routes/Home"
import Questions from "./routes/Questions"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/" element = {<Auth />}> </Route>
          <Route path="/questions/" element = {<Questions />}> </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
