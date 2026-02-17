
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PublicTrackingPage from './components/PublicTrackingPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Normalize path to handle routing for the public tracking view
const path = window.location.pathname.toLowerCase();
const isTrackingPath = path.endsWith('/track') || path.endsWith('/track/');

if (isTrackingPath) {
  root.render(<PublicTrackingPage />);
} else {
  root.render(<App />);
}
