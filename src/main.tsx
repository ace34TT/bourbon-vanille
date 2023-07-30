import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { PageTransitionContextProvider } from "./context/PageTransitionContext.tsx";
import { Transition } from "./components/loader/Transition.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <PageTransitionContextProvider>
          <Transition />
          <App />
        </PageTransitionContextProvider>
      </ParallaxProvider>
      {/* <ScrollRestoration /> */}
    </BrowserRouter>
  </React.StrictMode>
);
