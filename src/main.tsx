import { StrictMode } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { sagaMiddleware, setupStore } from 'store';
import { rootWatcher } from 'store/sagas';

const store = setupStore();
sagaMiddleware.run(rootWatcher);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
