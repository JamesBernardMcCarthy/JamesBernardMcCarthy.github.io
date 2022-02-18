import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App" bg="gray.500">
      <Header />
      <Body />
      <Footer />
    </Box>
  );
}

export default App;
