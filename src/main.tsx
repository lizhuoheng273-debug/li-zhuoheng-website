import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { transitionTo } from './navigation';
import './transitions.css';

document.addEventListener('click', (event) => {
  const target = event.target as Element | null;
  const link = target?.closest('a[href^="/projects/"]') as HTMLAnchorElement | null;
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  transitionTo(link.href);
});

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
