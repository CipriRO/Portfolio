import Link from "next/link";
import * as Icons from "@/app/components/Icons";

const Header = () => {
  return (
    <header className="flex fixed left-0 right-0 items-center justify-between py-2 px-6 backdrop-blur selection:bg-slate-100 selection:text-_rich-black">
      <h1 className="text-5xl font-[700] drop-shadow">
        C<span className="text-_dark-blue">.</span>
      </h1>

      <div className="flex gap-3 text-slate-100">
        <Link
          className="hover:text-_dark-blue transition-colors drop-shadow"
          href="mailto:stefanciprian444@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons.email />
        </Link>

        <Link
          className="hover:text-_dark-blue transition-colors drop-shadow"
          href="https://github.com/CipriRO"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons.github />
        </Link>

        <Link
          className="hover:text-_dark-blue transition-colors drop-shadow"
          href="https://www.instagram.com/tipi_26/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons.insta />
        </Link>
      </div>
    </header>
  );
};

export default Header;
