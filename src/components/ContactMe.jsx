import memoji from "../assets/images/memoji-contactMe.jpg";
import { LayoutGroup, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import MemojiImages from "./memojiImages";
import SimpleTextAnimation from "./SimpleTextAnimation";

export default function ContactMe() {
  const icons = [
    {
      element: mailIcon(),
      clickLocation: "mailto:stefanciprian444@gmail.com",
      newTab: false,
      text: 'stefanciprian444@gmail.com'
    },
    {
      element: githubIcon(),
      clickLocation: "https://github.com/CipriRO",
      newTab: true,
      text: 'CipriRO'
    },
    {
      element: instaIcon(),
      clickLocation: "https://www.instagram.com/tipi_26/",
      newTab: true,
      text: 'tipi_26'
    },
  ];

  return (
    <>
      <motion.section className="min-h-[90vh] flex flex-col lg:flex-row gap-3 items-center lg:justify-around justify-center">
        <LayoutGroup>
          <motion.div
            layout
            className="flex flex-col gap-1 items-center justify-center min-h-[25vw]"
          >
            <TextAnimation
              when="inView"
              gap="lg:gap-x-3 gap-x-2"
              wordStyle="2|text-brand"
              className="lg:text-[5vw] text-[13vw] font-bold justify-center"
            >
              Contact me!
            </TextAnimation>
            <TextAnimation
              when="inView"
              gap="gap-x-[0.8vw] lg:gap-x-[0.3vw]"
              className="font-semibold justify-center text-[4.1vw] lg:text-[1.6vw]"
              wordStyle="10,15,16,17,23,26,32|text-brand,font-bold"
            >
              Thank you for taking the time to visit my portfolio! If you have
              any questions, project inquiries, or simply want to say hello, I
              would love to hear from you. Feel free to reach out using the
              contact information provided below!
            </TextAnimation>
            <div className="flex flex-col gap-3 items-center mt-4">
            {icons.map((icon, index) => (
              <SimpleTextAnimation when="instant" from="left" key={index}>
                <a
                  className="flex gap-2 items-center hover:text-white transition-colors"
                  href={icon.clickLocation}
                  rel="noreferrer"
                  target={icon.newTab ? "_blank" : "_self"}
                >
                  {icon.element}
                  <p className="font-semibold justify-center text-[4.1vw] lg:text-[1.6vw]">
                    {icon.text}
                  </p>
                </a>
              </SimpleTextAnimation>
            ))}
            </div>
          </motion.div>

          <MemojiImages memoji={memoji} />
        </LayoutGroup>
      </motion.section>
    </>
  );
}

function mailIcon() {
  return (
    <svg
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.46 6.666A2.4 2.4 0 0 1 4.8 4.8h14.4a2.4 2.4 0 0 1 2.34 1.866L12 12.496l-9.54-5.83Zm-.06 1.37v8.525l6.964-4.27L2.4 8.037Zm8.114 4.96L2.63 17.828A2.401 2.401 0 0 0 4.8 19.2h14.4a2.4 2.4 0 0 0 2.17-1.373l-7.884-4.832-1.486.908-1.486-.908Zm4.123-.703L21.6 16.56V8.036l-6.963 4.255v.002Z"></path>
    </svg>
  );
}

function githubIcon() {
  return (
    <svg
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.246c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.013-1.025-.013-1.863C7 19.86 6.35 18.784 6.15 18.221c-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.012 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.087.387-1.987 1.025-2.687-.1-.25-.45-1.275.1-2.65 0 0 .837-.263 2.75 1.025a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.575.688.475A10.015 10.015 0 0 0 22 12.246c0-5.525-4.475-10-10-10Z"></path>
    </svg>
  );
}

function instaIcon() {
  return (
    <svg
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.793.217-2.429.465a4.896 4.896 0 0 0-1.771 1.154A4.909 4.909 0 0 0 2.525 5.45c-.248.635-.416 1.362-.465 2.425C2.013 8.944 2 9.284 2 12.001c0 2.715.013 3.055.06 4.121.05 1.066.217 1.792.465 2.428a4.91 4.91 0 0 0 1.154 1.771 4.88 4.88 0 0 0 1.77 1.154c.637.247 1.362.416 2.427.465 1.068.047 1.408.06 4.124.06 2.716 0 3.055-.012 4.122-.06 1.064-.05 1.793-.218 2.43-.465a4.893 4.893 0 0 0 1.77-1.154 4.91 4.91 0 0 0 1.153-1.771c.246-.636.415-1.363.465-2.428.047-1.066.06-1.406.06-4.122s-.012-3.056-.06-4.124c-.05-1.064-.219-1.791-.465-2.426a4.907 4.907 0 0 0-1.154-1.771 4.888 4.888 0 0 0-1.771-1.154c-.637-.248-1.365-.416-2.429-.465-1.067-.047-1.406-.06-4.123-.06H12Zm-.896 1.803H12c2.67 0 2.987.008 4.04.057.975.044 1.505.208 1.858.344.466.181.8.399 1.15.748.35.35.566.683.747 1.15.138.352.3.882.344 1.857.049 1.053.059 1.37.059 4.039 0 2.668-.01 2.986-.059 4.04-.044.974-.207 1.503-.344 1.856a3.09 3.09 0 0 1-.748 1.149 3.09 3.09 0 0 1-1.15.747c-.35.137-.88.3-1.857.345-1.053.047-1.37.059-4.04.059s-2.987-.011-4.041-.059c-.975-.045-1.504-.208-1.856-.345a3.097 3.097 0 0 1-1.15-.747 3.1 3.1 0 0 1-.75-1.15c-.136-.352-.3-.882-.344-1.857-.047-1.054-.057-1.37-.057-4.041 0-2.67.01-2.985.057-4.039.045-.975.208-1.505.345-1.857.181-.466.399-.8.749-1.15a3.09 3.09 0 0 1 1.15-.748c.352-.137.881-.3 1.856-.345.923-.042 1.28-.055 3.144-.056v.003Zm6.235 1.66a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 6.865a5.136 5.136 0 1 0-.16 10.272A5.136 5.136 0 0 0 12 6.865Zm0 1.801a3.334 3.334 0 1 1 0 6.668 3.334 3.334 0 0 1 0-6.668Z"></path>
    </svg>
  );
}
