import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Homepage from "./pages/homepage/Homepage";
import Prototype from "./pages/Prototype";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prototype />} />
    </Routes>
  );
}

export default App;
