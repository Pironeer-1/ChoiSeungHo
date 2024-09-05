import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './Gallery.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Gallery />);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Gallery />);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);