import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CanvasWithDragAndDropProvider } from "@wbm-npm/dw-canvas";
import store from "./store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CanvasWithDragAndDropProvider>
        <Provider store={store}>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </Provider>
      </CanvasWithDragAndDropProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
