import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Adoptation from "./pages/Adoptations";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import WhoAreWe from "./pages/WhoWeAre";
import FAQ from "./pages/FAQs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/adopt" element={<Adoptation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donations />} />
        <Route path="/about" element={<WhoAreWe />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}

export default App;
