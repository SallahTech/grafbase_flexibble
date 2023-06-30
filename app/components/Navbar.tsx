import { NavLinks } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            User Photo
            <Link href="/create-project">Share your Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
