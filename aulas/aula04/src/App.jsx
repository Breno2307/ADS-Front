import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import Erro404 from "./Pages/Erro404";
import Layout from "./layouts/Layout";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="perfil/:id" element={<Perfil />} />
        <Route path="about" element={<About />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
