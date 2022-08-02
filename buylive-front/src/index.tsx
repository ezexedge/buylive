import App from './App';
import ReactDOM from 'react-dom';
import 'src/mocks';
import 'src/utils/chart';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { HelmetProvider } from 'react-helmet-async';

import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';
import { Provider } from 'react-redux';
import store from 'src/store';

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
