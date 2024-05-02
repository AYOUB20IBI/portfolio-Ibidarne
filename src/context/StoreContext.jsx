// StoreContext.js
import { useContext, useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const StoreStateContext = createContext();

export const StoreContext = ({ children }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(() => {
    return sessionStorage.getItem("currentPage") || "home";
  });

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const setPath = (path) => {
    sessionStorage.setItem("currentPage", path);
    setActivePath(path);
  };

  return (
    <StoreStateContext.Provider
      value={{
        activePath,
        setPath,
      }}
    >
      {children}
    </StoreStateContext.Provider>
  );
};

export function useStore() {
  return useContext(StoreStateContext);
}
