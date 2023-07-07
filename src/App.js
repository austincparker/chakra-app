import { ChakraProvider } from "@chakra-ui/react";
import Home from "./screens/Home";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
