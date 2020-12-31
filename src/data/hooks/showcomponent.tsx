import React, { createContext, useState, useContext } from 'react';
import ActuallyComponent from '../../presentation/renders/ActuallyEvents';

interface ComponentInterface {
  component: any;
  setShowComponent: React.Dispatch<React.SetStateAction<any>>;
}

const ComponentContextSidebar = createContext<ComponentInterface> ({} as ComponentInterface);

const ShowComponent: React.FC = ({ children }) => {
  const [showComponent, setShowComponent] = useState(<ActuallyComponent />);

  return (
    <ComponentContextSidebar.Provider value={{ component: showComponent, setShowComponent }}>
      {children}
    </ComponentContextSidebar.Provider>
  );
}

export function useShowComponent() {
  const context = useContext(ComponentContextSidebar);

  if(!context) {
    throw new Error('useShowComponent must be used within an ComponentProvider');
  }

  return context;
}

export default ShowComponent;
