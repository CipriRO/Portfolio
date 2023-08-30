import clothingStore1 from "@/public/projects/clothing-store-1.jpg";
import eliasProject1 from "@/public/projects/elias-construction-1.jpg";
import todoApp3 from "@/public/projects/todo-app-3.jpg";
import weatherApp1 from "@/public/projects/weather-app-1.jpg";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "@/app/components/Icons";
import { SignalIcon } from "@heroicons/react/24/solid";

const MyProjects = () => {
  const projects = [
    {
      name: "Weather App",
      duration: "9 days",
      date: "21.07.2023",
      description: `This weather app provides users with up-to-date weather forecasts for their location or any location they search for. The clean, intuitive interface shows hourly and daily forecasts on the left side, with more detailed current conditions on the right.
      Users can view hourly predictions for any day by clicking on that date in the daily forecast section. The hourly view updates as time passes to keep users informed. The current weather panel pops up with a tap on mobile devices for easy access.
      Location detection automatically pulls weather data for the user's area on first load. A search feature allows looking up forecasts by city or zip code anywhere in the world. Information presented includes temperature, humidity, wind, chance of rain, and more.
      I built this fully-responsive weather app using HTML, CSS, React.js, Tailwind for styling, and Framer Motion for animations. It leverages the WeatherAPI.com API to pull in real-time weather data. Clean code and a simple but elegant design were top priorities.
      This project gave me good practice with APIs and React. I wanted to add more complex features but kept it simple due to time constraints.`,
      githubLink: "https://github.com/CipriRO/Weather-App",
      defaultImage: weatherApp1,
      // images: [weatherApp2, weatherApp1],
      badge: { badgeType: "badge-success", badgeContent: "Weather Api Used" },
    },
    {
      name: "Elias Construction",
      duration: "5-6 days",
      date: "16.06.2023",
      description: `A small construction company named "Elias Construction" needed a basic website to promote their services online. Without hesitation, I created one for them. The website includes a homepage, contact page, and sections for terms and conditions as well as privacy policy.
      This project utilizes common technologies such as html, css, javascript, react, tailwind, daisyUI, and react router. For privacy reasons, the website doesn't have a repository on github!`,
      demoLink: "https://eliconstruction.co.uk",
      defaultImage: eliasProject1,
      // images: [eliasProject3, eliasProject2, eliasProject1],
    },

    {
      name: "Todo App",
      duration: "2 days",
      date: "07.07.2023",
      description: `This project is a todo list app that lets you create, delete and complete your tasks with ease. It is built with HTML, CSS, JS, React.js, Tailwind, DaisyUI and Framer Motion.
      It has a beautiful design that follows the principles of minimalism and usability. It also has animations that make the app more interactive and fun to use. You can add a new task by typing in the input field and clicking 'Add'. You can delete a task by clicking on the trash icon.
      You can mark a task as completed by clicking on the check icon.`,
      githubLink: "https://github.com/CipriRO/Todo-App",
      defaultImage: todoApp3,
      // images: [todoApp3, todoApp2, todoApp1],
      badge: { badgeType: "badge-warning", badgeContent: "Easy" },
    },
    {
      name: "Hoodie Land",
      duration: "** days",
      date: "**-**-2021",
      description: `This project I started in Web Development shows a mistake I made as a beginner. I tried to create an e-commerce website without any previous experience in Web Development, but I couldn't finish it. 
      The project uses common technologies like html, css, javascript, react, bootstrap, and php. It also has a password-protected dashboard where the owner can check the status of products, handle contact forms, and more.Please note that as a front-end developer, I focus on the visual and user interface aspects of the project, and I do not offer php services for the backend systems like the password-protected dashboard.`,
      githubLink: "https://github.com/CipriRO/Clothing-Store-Website",
      defaultImage: clothingStore1,
      // images: [
      //   clothingStore6,
      //   clothingStore5,
      //   clothingStore4,
      //   clothingStore3,
      //   clothingStore2,
      //   clothingStore1,
      // ],
      badge: { badgeType: "badge-error", badgeContent: "Abandoned" },
    },
  ];

  return (
    <section className="flex flex-col gap-5 justify-center md:px-10 px-4 py-14 items-center min-h-screen bg-_rich-black text-slate-100 selection:bg-slate-100 selection:text-_rich-black">
      <div className="md:w-8/12 w-full self-start">
        <h1 className="text-5xl font-bold mb-3">My Projects.</h1>
        <p className="indent-2 ml-2">
          I have experience building web applications using the technologies
          listed in the About Me section. Please view my GitHub and the projects
          below to see examples of my work and the types of apps I built. I look
          forward to discussing my experience and interest in web development
          roles where I can contribute meaningfully as part of a talented
          engineering team.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[24rem] rounded-2xl h-96 bg-[#1d2d31d3] text-_platinum p-3"
          >
            <Image
              src={project.defaultImage}
              alt="Project image"
              className="rounded-xl mb-2 bg-cover"
              style={{ width: "100%" }}
            />
            <div className="flex justify-around items-center mb-2">
              <h1 className="font-bold text-xl">{project.name}</h1>

              <div>
                <p>
                  <span className="font-semibold">Duration:</span>{" "}
                  {project.duration}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {project.date}
                </p>
              </div>
            </div>

            <p className="indent-2 overflow-hidden mb-2">{project.description}</p>

            <div className="flex justify-around items-center">
              <Link
                href={project.githubLink ? project.githubLink : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  !project.githubLink && "opacity-30 pointer-events-none"
                } flex gap-2 items-center hover:bg-_dark-blue/10 transition-colors rounded-full py-1 px-2`}
              >
                <Icons.github />
                Github
              </Link>
              <Link
                href={project.demoLink ? project.demoLink : "#"}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className={`${
                  !project.demoLink && "opacity-30 pointer-events-none"
                } flex gap-2 items-center hover:bg-_dark-blue/10 transition-colors rounded-full py-1 px-2`}
              >
                <SignalIcon className="w-7" />
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
