import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SideMenu from "./components/SideMenu";
import SchedulePage from "./pages/SchedulePage";


function App() {

  return (
    <Flex>
      {location.pathname !== '/' && <SideMenu />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Flex>
  );
}

export default App;
