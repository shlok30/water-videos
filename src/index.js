import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./context/video-context";
import { AuthContextProvider } from "./context/auth-context";
import { UserContextProvider } from "./context/user-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </AuthContextProvider>
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
