import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import { MainLayout } from "./layouts/MainLayout";
import { Order } from "./pages/homepage/order/Order";
import { Story } from "./pages/homepage/our-story/Story";
import { Contact } from "./pages/Contact";

import Labs from "./pages/homepage/labs/Labs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/order" element={<Order />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
      <Route path="/labs" element={<Labs />} />
    </Routes>
  );
}

export default App;
