import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from 'App';
import 'index.css';

/**
 * The React.StrictMode helps to identify
 * coding patterns that may cause problems when working
 */

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<React.StrictMode>
  <App />
</React.StrictMode>
);
