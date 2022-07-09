import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from '~src/components/App';
import 'antd/dist/antd.css';

const element = document.getElementById('app');
const root = createRoot(element!);

root.render(
  <Router>
    <App />
  </Router>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('sw.js', import.meta.url), {
    type: 'module',
  });
}
