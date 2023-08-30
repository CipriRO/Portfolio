import Image from "next/image";
import memoji from "@/public/images/memoji-contactMe.jpg";
import Link from "next/link";
import * as Icons from "@/app/components/Icons";

const ContactMe = () => {
  return (
    <section className="md:px-10 px-4 py-20 bg-_platinum text-_rich-black selection:bg-_rich-black selection:text-_platinum min-h-screen flex md:flex-row flex-col-reverse items-center justify-around">
      <Image
        src={memoji}
        alt="Person calling"
        width={350}
        style={{ height: "auto" }}
      />

      <div className="flex flex-col gap-3 text-center justify-center md:w-7/12 w-full">
        <h1 className="text-6xl font-bold">Contact Me.</h1>
        <p>
          Thank you for taking the time to visit my portfolio! If you have any
          questions, project inquiries, or simply want to say hello, I would
          love to hear from you. Feel free to reach out using the contact
          information provided below!
        </p>

        <div className="flex flex-col gap-2 items-center">
          <Link
            className="hover:text-_dark-blue transition-colors drop-shadow flex gap-2 items-center"
            href="mailto:stefanciprian444@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.email />
            <p>Email</p>
          </Link>

          <Link
            className="hover:text-_dark-blue transition-colors drop-shadow flex gap-2 items-center"
            href="https://github.com/CipriRO"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.github />
            <p>Github</p>
          </Link>

          <Link
            className="hover:text-_dark-blue transition-colors drop-shadow flex gap-2 items-center"
            href="https://www.instagram.com/tipi_26/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.insta />
            <p>Instagram</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
