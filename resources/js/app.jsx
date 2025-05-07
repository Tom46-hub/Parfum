import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

const pages = import.meta.glob('./Pages/**/*.jsx');

createInertiaApp({
  resolve: async (name) => {
    const path = `./Pages/${name}.jsx`;
    const importPage = pages[path];

    if (!importPage) {
      console.error(`[Inertia] Page not found: ${path}`);
      throw new Error(`[Inertia] Unable to resolve Inertia page: ${name}`);
    }

    const module = await importPage();
    return module.default;
  },

  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },

  progress: {
    color: '#000',
  },
});
