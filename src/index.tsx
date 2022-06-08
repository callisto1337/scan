import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '~src/components/ui';
import 'antd/dist/antd.css';

const element = document.getElementById('app');
const root = createRoot(element!);

root.render(<App />);
