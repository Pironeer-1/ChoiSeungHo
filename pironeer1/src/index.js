import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );



// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
