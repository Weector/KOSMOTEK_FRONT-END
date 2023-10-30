import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import "../src/i18n/i18n.js";

import { App } from "./components/App";
import GlobalStyles from "./styles/Global.styled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="">
      {/* <Provider  store={store}> */}
      {/* <PersistGate  loading={null} persistor={persistor}> */}
      <GlobalStyles />
      <App />
      {/* </PersistGate> */}
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
