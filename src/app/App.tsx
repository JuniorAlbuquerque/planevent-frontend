import React from 'react';
import GlobalStyles from '../presentation/styles/GlobalStyles';

import Login from '../presentation/pages/Login';
import Home from '../presentation/pages/Home';

import ComponentProvider from '../data/hooks/showcomponent';

const App: React.FC = () => {
  return (
    <>
      <ComponentProvider>
        <Home />
      </ComponentProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
