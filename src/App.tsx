import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import { MainLayout } from "./layouts/MainLayout";
import { Order } from "./pages/Order";
import { Story } from "./pages/homepage/our-story/Story";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/order" element={<Order />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
