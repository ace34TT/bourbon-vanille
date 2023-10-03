import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { PageTransitionContextProvider } from "./context/PageTransitionContext.tsx";
import { Transition } from "./components/loader/Transition.tsx";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store.ts";
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ParallaxProvider>
            <PageTransitionContextProvider>
              <Transition />
              <App />
            </PageTransitionContextProvider>
          </ParallaxProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>

    {/* <ScrollRestoration /> */}
  </React.StrictMode>,
);
