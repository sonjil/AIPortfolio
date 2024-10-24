import React, { createContext, useContext, useRef } from 'react';

type NavigationContextType = {
  scrollToSection: (sectionId: string) => void;
};

export const NavigationContext = createContext<NavigationContextType>({
  scrollToSection: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
};