import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './global.css';

const root = createRoot(document.querySelector('#root')!);

root.render(
  <StrictMode>
    <div />
  </StrictMode>,
);
