import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Adoptation from "./pages/Adoptations";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import WhoAreWe from "./pages/WhoWeAre";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/adoptation" element={<Adoptation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donations />} />
        <Route path="/whoarewe" element={<WhoAreWe />} />
      </Route>
    </Routes>
  );
}

export default App;
