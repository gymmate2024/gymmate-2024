import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";


function App() {

  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Box>
  );
}

export default App;
