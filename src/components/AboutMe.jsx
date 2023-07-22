// import { motion } from "framer-motion";
import memoji from "../assets/images/memoji-aboutMe.jpg";
import TextAnimation from "./TextAnimation";
import MemojiImages from "./memojiImages";

export default function AboutMe() {
  return (
    <>
      <section className="min-h-[90vh] flex lg:flex-row flex-col items-center gap-4 lg:justify-around justify-center">
        <MemojiImages memoji={memoji} />
        <div className="flex flex-col gap-3">
          <TextAnimation
            when="inView"
            gap="gap-x-2"
            className="lg:text-[4vw] text-[10vw] font-bold"
            wordStyle="2|text-brand"
          >
            About Me!
          </TextAnimation>
          <div className="flex flex-col">
            <TextAnimation
              when="inView"
              gap="gap-x-[0.8vw] lg:gap-x-[0.3vw]"
              className="font-semibold text-left text-[3.9vw] lg:text-[1.4vw]"
              wordStyle="1|indent-2"
            >
              I have always enjoyed coding and creating beautiful interfaces
              that can be of help to people. I take pride in the results I
              achieve. However, I haven&apos;t always known what to code, where
              to code, or how to code. This changed when a friend of mine
              suggested an idea: &apos;Why don&apos;t you try making a
              website?&apos;
            </TextAnimation>
            <TextAnimation
              when="inView"
              gap="gap-x-[0.8vw] lg:gap-x-[0.3vw]"
              className="font-semibold text-left text-[3.9vw] lg:text-[1.4vw]"
              wordStyle="1|indent-2;4,5,21,23,33,38|text-brand"
            >
              I&apos;m new to frontend development, having started just a couple
              months ago, but I will always try my best to learn and improve.
              Although I&apos;m still gaining experience, I have worked with
              React as well as helpful UI packages like Tailwind for styling and
              Framer Motion for animations.
            </TextAnimation>
            <TextAnimation
              when="inView"
              wordStyle="1,9,11,18,19,24|text-brand;1|indent-2"
              gap="gap-x-[1vw] lg:gap-x-[0.3vw]"
              className="font-semibold text-left text-[3.9vw] lg:text-[1.4vw]"
            >
              I look forward to continuing to learn new skills and techniques
              that will allow me to create intuitive, aesthetically-pleasing
              interfaces that users will enjoy.
            </TextAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
