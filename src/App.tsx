import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import { MainLayout } from "./layouts/MainLayout";
import { Order } from "./pages/order/Order";
import { Story } from "./pages/our-story/Story";
import { Contact } from "./pages/Contact";
import Labs from "./pages/homepage/labs/Labs";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/order" element={<Order />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </>
  );
}

export default App;
