import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import { MainLayout } from "./layouts/MainLayout";
import { Order } from "./pages/order/Order";
import { Story } from "./pages/our-story/Story";
import { Contact } from "./pages/Contact";
import Labs from "./pages/homepage/labs/Labs";
import { useEffect } from "react";
import CustomCursor from "./components/custom-cursor/CustomCursor";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const cursor = useSelector(
    (state: RootState) => state.cursor.isHoveringHeader,
  );
  useEffect(() => {
    if (cursor) document.body.classList.add("no-cursor");
    else document.body.classList.remove("no-cursor");
  }, [cursor]);

  return (
    <>
      {!isMobile && cursor && <CustomCursor />}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </>
  );
}

export default App;
