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
import weatherApp1 from "./assets/images/weather-app-1.jpg";
import weatherApp2 from "./assets/images/weather-app-2.jpg";
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
      description: `This project I started in Web Development shows a mistake I made as a beginner. I tried to create a drop shipping website without any previous experience in Web Development, but I couldn't finish it. 
      The project uses common technologies like html, css, javascript, react, bootstrap, and php. It also has a password-protected dashboard where the owner can check the status of products, handle contact forms, and more.Please note that as a front-end developer, I focus on the visual and user interface aspects of the project, and I do not offer php services for the backend systems like the password-protected dashboard.`,
      githubLink: "https://github.com/CipriRO/Clothing-Store-Website",
      images: [
        clothingStore6,
        clothingStore5,
        clothingStore4,
        clothingStore3,
        clothingStore2,
        clothingStore1,
      ],
      badge: { badgeType: "badge-error", badgeContent: "Abandoned" },
    },
    {
      name: "Elias Construction",
      duration: "5-6 days",
      date: "16.06.2023",
      description: `A small construction company named "Elias Construction" needed a basic website to promote their services online. Without hesitation, I created one for them. The website includes a homepage, contact page, and sections for terms and conditions as well as privacy policy.
      This project utilizes common technologies such as html, css, javascript, react, tailwind, daisyUI, and react router. For privacy reasons, the website doesn't have a repository on github!`,
      webLink: "https://eliconstruction.co.uk",
      images: [eliasProject3, eliasProject2, eliasProject1],
      badge: { badgeType: "badge-success", badgeContent: "In use" },
    },
    {
      name: "Todo App",
      duration: "2 days",
      date: "07.07.2023",
      description: `This project is a todo list app that lets you create, delete and complete your tasks with ease. It is built with HTML, CSS, JS, React.js, Tailwind, DaisyUI and Framer Motion.
      It has a beautiful design that follows the principles of minimalism and usability. It also has animations that make the app more interactive and fun to use. You can add a new task by typing in the input field and clicking 'Add'. You can delete a task by clicking on the trash icon.
      You can mark a task as completed by clicking on the check icon.`,
      webLink: "asdass",
      githubLink: "https://github.com/CipriRO/Todo-App",
      images: [todoApp3, todoApp2, todoApp1],
      badge: { badgeType: "badge-warning", badgeContent: "Easy" },
    },
    {
      name: "Weather App",
      duration: "9 days",
      date: "21.07.2023",
      description: `This weather app provides users with up-to-date weather forecasts for their location or any location they search for. The clean, intuitive interface shows hourly and daily forecasts on the left side, with more detailed current conditions on the right.
      Users can view hourly predictions for any day by clicking on that date in the daily forecast section. The hourly view updates as time passes to keep users informed. The current weather panel pops up with a tap on mobile devices for easy access.
      Location detection automatically pulls weather data for the user's area on first load. A search feature allows looking up forecasts by city or zip code anywhere in the world. Information presented includes temperature, humidity, wind, chance of rain, and more.
      I built this fully-responsive weather app using HTML, CSS, React.js, Tailwind for styling, and Framer Motion for animations. It leverages the WeatherAPI.com API to pull in real-time weather data. Clean code and a simple but elegant design were top priorities.
      This project gave me good practice with APIs and React. I wanted to add more complex features but kept it simple due to time constraints.`,
      webLink: "asdass",
      githubLink: "https://github.com/CipriRO/Weather-App",
      images: [weatherApp2, weatherApp1],
      badge: { badgeType: "badge-success", badgeContent: "Api Used" },
    },
  ];

  return (
    <>
      {!isLoader && <Header isLoader={isLoader} githubIcon={githubIcon} />}
      <WebsiteIntro isLoader={isLoader} setIsLoader={setIsLoader} />

      {!isLoader && (
        <>
          <AboutMe />
          <Projects
            projects={projects}
            setViewState={setViewState}
            githubIcon={githubIcon}
          />
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

function githubIcon() {
  return (
    <svg
      width="26"
      height="26"
      fill="currentColor"
      className="hover:fill-white transition-colors"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
    </svg>
  );
}
