import { Outlet } from "react-router-dom";
import Header from "./../app/header/Header";
import Navigation from "./../app/bottom navbar/Navigation";
import { useEffect, useState } from "react";
import LoadingPage from "./../app/loadingPage/LoadingPage";

function Layout() {
  const [isLoading, setIsLoading] = useState(Boolean(true));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <Outlet />
          <Navigation />
        </>
      )}
    </>
  );
}

export default Layout;
