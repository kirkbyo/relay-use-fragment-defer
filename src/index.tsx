import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { RelayEnvironmentProvider } from "react-relay";
import { getEnvironment } from "./relayEnvironment";

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={getEnvironment()}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <App />
      </div>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
