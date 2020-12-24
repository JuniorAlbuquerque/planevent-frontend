import React from 'react';
import GlobalStyles from '../presentation/styles/GlobalStyles';

import Login from '../presentation/pages/Login';

const App: React.FC = () => {
  return (
    <>
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
