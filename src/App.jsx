import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WebsiteIntro from "./components/WebsiteIntro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import eliasProject1 from "./assets/images/elias-construction-1.jpg";
import eliasProject2 from "./assets/images/elias-construction-2.jpg";
import eliasProject3 from "./assets/images/elias-construction-3.jpg";

function App() {
  const [isLoader, setIsLoader] = useState(true);
  const projects = [
    {
      name: "Elias Construction",
      duration: "5-6 days",
      date: "16.06.2023",
      description: `A small construction company named "Elias Construction" needed a website to promote their services online, and without hesitation, I created one. This project uses the following tehnologies: html, css, javascript, react, tailwind, daisyUI and react router. Visit it on `,
      link: "https://eliconstruction.co.uk",
      linkName: "eliconstruction.co.uk",
      images: [eliasProject1, eliasProject2, eliasProject3],
    },
  ];

  return (
    <>
      {!isLoader && <Header isLoader={isLoader} />}
      <WebsiteIntro isLoader={isLoader} setIsLoader={setIsLoader} />

      {!isLoader && (
        <>
          <AboutMe />
            <Projects
              projects={projects}
            />
        </>
      )}
    </>
  );
}

export default App;
