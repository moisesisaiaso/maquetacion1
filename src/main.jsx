import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./assets/fonts/fontawesome-free-6.1.2-web/css/all.css";
import "./assets/fonts/poppins/poppins.module.css";
import "./assets/css/reset.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </React.StrictMode>
);
