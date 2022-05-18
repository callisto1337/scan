import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@components';
import 'bootstrap/dist/css/bootstrap.min.css';

const element = document.getElementById('app');
const root = createRoot(element!);

root.render(<App />);
