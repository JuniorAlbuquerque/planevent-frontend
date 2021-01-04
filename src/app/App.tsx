import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from '../presentation/styles/GlobalStyles';

import Routes from '../infra/routes';

import ComponentProvider from '../data/hooks/showcomponent';
import AuthProvider from '../data/hooks/auth';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ComponentProvider>
          <Routes />
        </ComponentProvider>
      </AuthProvider>
      <GlobalStyles />
    </Router>
  );
}

export default App;
