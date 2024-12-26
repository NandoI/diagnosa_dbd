import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider dari Redux
import store from './redux/store.js'; // Import store yang telah dibuat

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Bungkus aplikasi dengan Provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
