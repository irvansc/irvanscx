import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Irvan<span className="text-accent">scx</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden gap-8 items-center xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
