import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer, { rootSaga } from "./modules/index";
import createSagaMiddleware from "@redux-saga/core";
import { loadableReady } from "@loadable/component";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: window.__PRELOAD_STATE__,
  middleware: [thunk, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};
if (process.env.NODE_ENV === "production") {
  loadableReady(() => {
    ReactDOM.hydrateRoot(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
