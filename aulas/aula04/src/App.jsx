import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import Erro404 from "./Pages/Erro404";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
