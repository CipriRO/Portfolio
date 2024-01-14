import eliasProjectImage from "@/public/projects/elias-construction.jpg";
import weatherAppImage from "@/public/projects/weather-app.jpg";
import novaMotorsImage from "@/public/projects/nova-motors.png";
import cipiWebsImage from "@/public/projects/cipiwebs.png";
import * as Icons from "@/app/components/Icons";

export const projects = [
  {
    name: "Elias Construction",
    duration: "5-6 days",
    date: "16.06.2023",
    website: "https://eliconstruction.co.uk",
    defaultImage: eliasProjectImage,
  },
  {
    name: "Weather App",
    duration: "9 days",
    date: "21.07.2023",
    website: "https://weather-app-ciprianportfolio.vercel.app",
    githubLink: "https://github.com/CipriRO/Weather-App",
    defaultImage: weatherAppImage,
  },
  {
    name: "Nova Motors",
    duration: "6 days",
    date: "5.01.2024",
    website: "https://nova-motors.vercel.app",
    githubLink: "https://github.com/CipriRO/nova-motors",
    defaultImage: novaMotorsImage,
  },
  {
    name: "CipiWebs",
    duration: "9 days",
    date: "12.09.2023",
    website: "https://cipiwebs.vercel.app",
    defaultImage: cipiWebsImage,
  },
];

export const ContactDetalis = [
  {
    name: "Email",
    address: "mailto:cipiw3bs@gmail.com",
    icon: <Icons.email />,
  },
  {
    name: "Github",
    address: "https://github.com/CipriRO",
    icon: <Icons.github />,
  },
  {
    name: "Instagram",
    address: "https://www.instagram.com/cipiwebs/",
    icon: <Icons.insta />,
  },
];
