import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app/app';

const queryClient = new QueryClient()

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>

  </StrictMode>,
  document.getElementById('root')
);
