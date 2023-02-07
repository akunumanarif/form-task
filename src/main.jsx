import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);
