import Image from "next/image";

const Main = () => {
  return (
    <section className="flex md:flex-row md:py-0 flex-col py-24 justify-around items-center min-h-screen selection:bg-slate-100 selection:text-_rich-black px-4">
      <div className="flex flex-col gap-2 items-center text-center">
        <h1 className="text-6xl font-bold">Hi! I&apos;m Ciprian<span className="text-_dark-blue">.</span></h1>
        <p className="text-3xl">I am a full stack developer!</p>
      </div>

      <Image src="/../images/memoji-main.jpg" width={350} height={350} priority alt="Person with thumbs up" />
    </section>
  );
};

export default Main;
