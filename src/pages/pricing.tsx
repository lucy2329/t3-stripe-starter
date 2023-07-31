import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

const Pricing = () => {
  return (
    <div className="relative isolate flex min-h-screen flex-col bg-gradient-to-tr from-[#1f2937] to-[#1f1e20] px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a8c4a6] to-[#1f2937] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <Header />
      <section className="bg-transparent">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
            <h2 className="mb-4 text-4xl font-bold  text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-400 sm:text-xl">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-600 bg-transparent p-6 text-center text-white shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
              <p className="font-light text-gray-400 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <h1 className="relative inline-block bg-gradient-to-r from-[#906fcd] via-[#bbb0cf] to-indigo-400 bg-clip-text text-5xl font-bold text-transparent">
                  $29
                </h1>
                <span className="text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <button className=" cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 ">
                Get started
              </button>
            </div>
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-600 bg-transparent p-6 text-center text-white shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Company</h3>
              <p className="font-light text-gray-400 sm:text-lg">
                Relevant for multiple users, extended & premium support.
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <h1 className="relative inline-block bg-gradient-to-r from-[#906fcd] via-[#bbb0cf] to-indigo-400 bg-clip-text text-5xl font-bold text-transparent">
                  $99
                </h1>
                <span className="text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">10 developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
              </ul>
              <button className=" cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 ">
                Get started
              </button>
            </div>
            <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-600  bg-transparent p-6 text-center text-white shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
              <p className="font-light text-gray-400 sm:text-lg">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <h1 className="relative inline-block bg-gradient-to-r from-[#906fcd] via-[#bbb0cf] to-indigo-400 bg-clip-text text-5xl font-bold text-transparent">
                  $499
                </h1>
                <span className="text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">100+ developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <TickIcon />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <button className=" cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 ">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const TickIcon = () => {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
    </svg>
  );
};

export default Pricing;
