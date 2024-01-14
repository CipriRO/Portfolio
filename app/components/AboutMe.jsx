import Image from "next/image";
import memoji from "@/public/images/memoji-aboutMe.jpg";

const AboutMe = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse py-20 md:px-10 px-4 gap-6 justify-around items-center min-h-screen bg-_platinum text-slate-900 selection:bg-_rich-black selection:text-slate-100">
      <Image
        src={memoji}
        alt="Person wondering"
        width={350}
        style={{ height: "auto" }}
      />
      <div className="flex flex-col gap-3 pr-5">
        <h1 className="text-5xl font-bold">About Me.</h1>
        <p className="indent-2">
          An aspiring front end web developer with experience building
          responsive front-end web applications using HTML, CSS, JavaScript,
          React.js, Next.js, Redux, and Framer Motion. Back-end skills include
          developing APIs with Next.js, implementing authentication with
          NextAuth.js, and integrating databases like MongoDB using Mongoose.
          Passionate about crafting performant and usable web apps. A quick
          learner eager to join a dynamic team, take on new challenges, and
          continue expanding my skills.
        </p>

        <div className="flex gap-3 mt-4 items-center lg:justify-start justify-center flex-wrap">
          <Image
            title="HTML"
            src="/../icons/html-icon.svg"
            alt="html icon"
            width={80}
            height={80}
          />
          <Image
            title="CSS"
            src="/../icons/css-icon.svg"
            alt="css icon"
            width={80}
            height={80}
          />
          <Image
            title="JS"
            src="/../icons/js-icon.svg"
            alt="javascript icon"
            width={80}
            height={80}
          />
          <Image
            title="React.js"
            src="/../icons/reactjs-icon.svg"
            alt="react.js icon"
            width={80}
            height={80}
          />
          <Image
            title="Redux"
            src="/../icons/redux-icon.svg"
            alt="redux icon"
            width={80}
            height={80}
          />
          <Image
            title="Next.js"
            src="/../icons/nextjs-icon.svg"
            alt="next.js icon"
            width={140}
            height={140}
          />
          <Image
            title="NextAuth.js"
            src="/../icons/nextauthjs-icon.svg"
            alt="next-auth.js icon"
            width={80}
            height={80}
          />
          <Image
            title="MongoDB"
            src="/../icons/mongodb-icon.svg"
            alt="mongodb icon"
            width={65}
            height={65}
          />
          <Image
            title="Framer Motion"
            src="/../icons/framermotion-icon.svg"
            alt="framer motion icon"
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
