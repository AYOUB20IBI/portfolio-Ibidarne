import "./About.css";

import AboutFirst from "./AboutFirst";
import { useEffect, useState } from "react";
import LoadingPage from "../loadingPage/LoadingPage";

function About() {

  const [isLoading, setIsLoading] = useState(Boolean(true));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    document.title = "IBIDARNE | About Me";
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <section className="about">
          <div className="container">
            <div className="title_section_about">
              <h1>
                About <span>Me</span>
              </h1>
            </div>
            <AboutFirst />
          </div>
        </section>
      )}
    </>
  );
}

export default About;
