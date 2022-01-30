import { createContext, useState } from 'react';
import { DrawerType } from '../ContextTypes/DrawerType';
import { AppType } from '../ContextTypes/ContextAPIType';

const initialState = {
  drawer: false,
};

export const DrawerContext = createContext<DrawerType>(initialState);

const DrawerContextProvider = ({ children }: AppType) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <DrawerContext.Provider value={{ drawer, setDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
