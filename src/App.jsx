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
import todoApp1 from "./assets/images/todo-app-1.jpg";
import todoApp2 from "./assets/images/todo-app-2.jpg";
import todoApp3 from "./assets/images/todo-app-3.jpg";
import ViewProject from "./components/viewProject";
import { AnimatePresence } from "framer-motion";
import ContactMe from "./components/ContactMe";

function App() {
  const [isLoader, setIsLoader] = useState(true);
  const [viewState, setViewState] = useState(false);

  const projects = [
    {
      name: "Hoodie Land",
      duration: "** days",
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
      badge: {badgeType: 'badge-error', badgeContent: 'Abandoned', badgePosition: {l: '72%', t: '3.8%'}}
    },
    {
      name: "Elias Construction",
      duration: "5-6 days",
      date: "16.06.2023",
      description: `A small construction company named "Elias Construction" needed a basic website to promote their services online. Without hesitation, I created one for them. The website includes a homepage, contact page, and sections for terms and conditions as well as privacy policy. This project utilizes common technologies such as html, css, javascript, react, tailwind, daisyUI, and react router. You can visit the website at `,
      link: "https://eliconstruction.co.uk",
      linkName: "eliconstruction.co.uk",
      images: [eliasProject3, eliasProject2, eliasProject1],
      badge: {badgeType: 'badge-success', badgeContent: 'Online', badgePosition: {l: '80%', t: '3.8%'}}
    },
    {
      name: "Todo App",
      duration: "2 days",
      date: "07.07.2023",
      description: `This project is a todo list app that lets you create, delete and complete your tasks with ease. It is built with HTML, CSS, JS, React.js, Tailwind, DaisyUI and Framer Motion. It has a beautiful design that follows the principles of minimalism and usability. It also has animations that make the app more interactive and fun to use. You can add a new task by typing in the input field and clicking 'Add'. You can delete a task by clicking on the trash icon. You can mark a task as completed by clicking on the check icon.`,
      images: [
        todoApp3,
        todoApp2,
        todoApp1
      ],
      badge: {badgeType: 'badge-warning', badgeContent: 'New', badgePosition: {l: '83%', t: '3.8%'}}
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
          <ContactMe />
        </>
      )}
    </>
  );
}

export default App;
