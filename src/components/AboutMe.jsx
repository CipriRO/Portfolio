// import { motion } from "framer-motion";
import memoji from "../assets/images/memoji-aboutMe.jpg";
import TextAnimation from "./TextAnimation";
import MemojiImages from "./memojiImages";

export default function AboutMe() {
  return (
    <>
      <section className="min-h-[100vh] flex lg:flex-row flex-col items-center gap-4 lg:justify-around justify-center">
        <MemojiImages memoji={memoji} />
        <div className="flex flex-col gap-3">
          <TextAnimation
            when="inView"
            gap="lg:gap-x-2 gap-x-1"
            className="lg:text-[4vw] text-[10vw] font-bold"
            wordStyle="2|text-brand"
          >
            About Me!
          </TextAnimation>
          <div className="flex flex-col">
            <TextAnimation
              when="inView"
              gap="gap-x-[1vw] lg:gap-x-[0.3vw]"
              className="font-semibold text-left text-[3.9vw] lg:text-[1.4vw]"
              wordStyle="1|indent-2"
            >
              I have always enjoyed coding and creating beautiful interfaces
              that can be of help to people. I take pride in the results I
              achieve. However, I haven&apos;t always known what to code, where to
              code, or how to code. This changed when a friend of mine suggested
              an idea: &apos;Why don&apos;t you try making a website?&apos;
            </TextAnimation>
            <TextAnimation
              when="inView"
              wordStyle="31,32|text-brand;1|indent-2"
              gap="gap-x-[1vw] lg:gap-x-[0.3vw]"
              className="font-semibold text-left text-[3.9vw] lg:text-[1.4vw]"
            >
              And here I am, developing this portfolio for my future clients
              (maybe you are one of them) who can not only view my projects but
              also experience my passion for web development..
            </TextAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
