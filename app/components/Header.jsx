import Link from "next/link";
import * as Icons from "@/app/components/Icons";
import { ContactDetalis } from "@/constants";

const Header = () => {
  return (
    <header className="flex fixed left-0 right-0 items-center justify-between py-2 px-6 backdrop-blur selection:bg-slate-100 selection:text-_rich-black">
      <h1 className="text-5xl font-[700] drop-shadow">
        C<span className="text-_dark-blue">.</span>
      </h1>

      <div className="flex gap-3 text-slate-100">
        {ContactDetalis.map((contact, index) => (
          <Link
            key={index}
            className="hover:text-_dark-blue transition-colors drop-shadow"
            href={contact.address}
            rel="noopener noreferrer"
            target="_blank"
          >
            {contact.icon}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
