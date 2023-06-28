import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WebsiteIntro from "./components/WebsiteIntro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import eliasProject1 from "./assets/images/elias-construction-1.jpg";
import eliasProject2 from "./assets/images/elias-construction-2.jpg";
import eliasProject3 from "./assets/images/elias-construction-3.jpg";
import clothingStore1 from "./assets/images/clothing-store-1.jpg";
import clothingStore2 from "./assets/images/clothing-store-2.jpg";
import clothingStore3 from "./assets/images/clothing-store-3.jpg";
import clothingStore4 from "./assets/images/clothing-store-4.jpg";
import clothingStore5 from "./assets/images/clothing-store-5.jpg";
import clothingStore6 from "./assets/images/clothing-store-6.jpg";
import ViewProject from "./components/viewProject";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoader, setIsLoader] = useState(true);
  const [viewState, setViewState] = useState(false);

  const projects = [
    {
      name: "Elias Construction",
      duration: "5-6 days",
      date: "16.06.2023",
      description: `A small construction company named "Elias Construction" needed a basic website to promote their services online. Without hesitation, I created one for them. The website includes a homepage, contact page, and sections for terms and conditions as well as privacy policy. This project utilizes common technologies such as html, css, javascript, react, tailwind, daisyUI, and react router. You can visit the website at `,
      link: "https://eliconstruction.co.uk",
      linkName: "eliconstruction.co.uk",
      images: [eliasProject3, eliasProject2, eliasProject1],
    },
    {
      name: "Clothing Store",
      duration: "Not Finished",
      date: "**-**-2021",
      description: `This project I started in Web Development shows a mistake I made as a beginner. I tried to create a drop shipping website without any previous experience in Web Development, but I couldn't finish it. The project uses common technologies like html, css, javascript, react, bootstrap, and php. It also has a password-protected dashboard where the owner can check the status of products, handle contact forms, and more. Please note that as a front-end developer, I focus on the visual and user interface aspects of the project, and I do not offer php services for the backend systems like the password-protected dashboard.`,
      images: [
        clothingStore6,
        clothingStore5,
        clothingStore4,
        clothingStore3,
        clothingStore2,
        clothingStore1,
      ],
    },
  ];

  return (
    <>
      {!isLoader && <Header isLoader={isLoader} />}
      <WebsiteIntro isLoader={isLoader} setIsLoader={setIsLoader} />

      {!isLoader && (
        <>
          <AboutMe />
          <Projects projects={projects} setViewState={setViewState} />
          <AnimatePresence>
            {viewState !== false && (
              <ViewProject
                images={projects[viewState].images}
                setViewState={setViewState}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
