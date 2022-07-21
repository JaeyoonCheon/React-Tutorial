import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createLogger } from "redux-logger";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, ReduxThunk],
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
