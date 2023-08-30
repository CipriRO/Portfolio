import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Main from "./components/Main";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Main />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </main>
  );
}
