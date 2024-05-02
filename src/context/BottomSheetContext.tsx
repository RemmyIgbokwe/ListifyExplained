import React, { createContext, useState } from "react";

const BottomVisibilityContext = createContext({
  isTabBarVisible: true,
  setTabBarVisible: () => {} // A placeholder function for setting visibility
});

export const BottomVisibilityProvider = ({ children }:any) => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(false);

  const setTabBarVisible = (isVisible: boolean | ((prevState: boolean) => boolean)) => {
    setIsTabBarVisible(isVisible);
  };

  return (
    // @ts-ignore
    <BottomVisibilityContext.Provider value={{ isTabBarVisible, setTabBarVisible }}>
      {children}
    </BottomVisibilityContext.Provider>
  );
};

export default BottomVisibilityContext;