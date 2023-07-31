import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            width="32"
            height="32"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Company
          </span>
        </Link>
        <div className="flex md:order-2">
          <AuthShowcase />
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li>
              <Link
                href="/"
                className="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-white  md:p-0 md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block rounded py-2 pl-3 pr-4 text-white  md:p-0 md:dark:hover:bg-transparent"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-white  md:p-0 md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="flex justify-between space-x-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        <span className={sessionData ? "mt-1" : ""}>
          {sessionData ? "Sign out" : "Sign in"}
        </span>
        {sessionData?.user.image && (
          <Image
            alt="user image"
            src={sessionData.user.image}
            width={32}
            height={32}
            className="ml-2 rounded-full"
          />
        )}
      </button>
    </div>
  );
}
