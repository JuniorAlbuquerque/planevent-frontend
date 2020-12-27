import React, { createContext, useState, useContext } from 'react';
import EmptyComponent from '../../presentation/renders/EmptyList';

interface ComponentInterface {
  component: any;
  setShowComponent: React.Dispatch<React.SetStateAction<any>>;
}

const ComponentContextSidebar = createContext<ComponentInterface> ({} as ComponentInterface);

const ShowComponent: React.FC = ({ children }) => {
  const [showComponent, setShowComponent] = useState(<EmptyComponent />);

  return (
    <ComponentContextSidebar.Provider value={{ component: showComponent, setShowComponent }}>
      {children}
    </ComponentContextSidebar.Provider>
  );
}

export function useShowComponent() {
  const context = useContext(ComponentContextSidebar);

  if(!context) {
    throw new Error('useToggle must be used within an ComponentProvider');
  }

  return context;
}

export default ShowComponent;
