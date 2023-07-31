export const Footer = () => {
  return (
    <footer className="m-4 mt-auto rounded-lg">
      <div className="mx-auto w-full max-w-screen-xl p-4 text-gray-200 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Company Name™
          </a>
          <span className="text-gray-300">. All Rights Reserved.</span>
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
