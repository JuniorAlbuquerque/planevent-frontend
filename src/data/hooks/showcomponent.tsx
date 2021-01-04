import React, { createContext, useState, useContext } from 'react';
import ActuallyComponent from '../../presentation/renders/ActuallyEvents';

interface ComponentInterface {
  component: any;
  setShowComponent: React.Dispatch<React.SetStateAction<any>>;
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const ComponentContextSidebar = createContext<ComponentInterface> ({} as ComponentInterface);

const ShowComponent: React.FC = ({ children }) => {
  const [showComponent, setShowComponent] = useState(<ActuallyComponent />);
  const [render, setRender] = useState(false);

  return (
    <ComponentContextSidebar.Provider value={{ component: showComponent, setShowComponent, render, setRender }}>
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
