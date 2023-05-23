"use client";
import Flow from "@/components/homepageflow";
const SectionText = (props: any) => {
  const reasons = [
    "intuitive features",
    "Powerfull Features",
    "Observable performance",
  ];
  return (
    <div className="flex w-full h-max p-20 rounded-lg bg-gray-200 lg:w-1/2 items-center justify-center">
      <div className="flex h-max w-max flex-col space-y-6 items-center max-w-lg">
        <h1 className="text-6xl font-bold"> {props.title}</h1>
        <p className="">
          Splatter Studio offers a simple drag and drop interface for composing
          LLM applications that works like magic. Spend time on your ideas
          instead of fixing code. See the structure of your application at a
          glance.
        </p>
        {reasons.map((reason, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="flex space-x-4 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h3 className="bold text-3xl  tracking-wide">{reason}</h3>
              </div>
              <p>
                LLM Application can be opaque and hard to monitor. We provide
                quantitative metrics to help developers understand behavior and
                performance of every component.
              </p>
            </div>
          );
        })}

        <button
          type="button"
          className="mb-2 mr-2 rounded-lg bg-black px-5 py-2.5 w-max text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
        >
          try in editor{" "}
        </button>
      </div>
    </div>
  );
};
export default function Home() {
  const features = [
    "prebuilt library of LLM applications",
    "Supports major langchain features",
    "analytics for dashboard",
    "Real Time Testing",
  ];

  const Sections = [
    "Intuitive Interface",
    "Real Time testing",
    "Powerfull Performance",
  ];

  return (
    <div className="flex flex-col ">
      <header className="z-50   bg-black border-black border-b-4 px-20 flex h-max w-full items-center justify-between p-4">
        <div className="text-3xl text-white font-bold tracking-wide">
          Splatter AI
        </div>
        <div className="flex space-x-4 text-white">
          <div>About us</div>
          <div>Github</div>
          <div>Join</div>
        </div>
      </header>

      <div className="flex  h-screen w-full ">
        <div className="flex z-40 h-screen  lg:w-1/2 items-center justify-center bg-red w-full">
          <div className="flex h-max w-max flex-col space-y-6  p-8 rounded-lg ">
            {" "}
            {/*border-blue-400 bg-blue-200*/}
            <h1 className="text-4xl font-bold">
              A Visual IDE <br />
              for building Large Language <br />
              Model Applications
            </h1>
            <p>
              Rapidly prototype and share{" "}
              <span className="font-bold">LLMs-powered applications</span>
              <br />
              in minutes with Splatters intuitive no-code editor
            </p>
            <ul className="flex flex-col space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
            >
              Join the Waitlist
            </button>
          </div>
        </div>

        {/* <div className="w-1/2 hidden lg:inline h-screen bg-blue-900"></div> */}
        <div className="w-1/2 hidden lg:inline h-screen bg-blue">
          <Flow />
        </div>
      </div>

      {Sections.map((section, index) => {
        return (
          <div key={index} className="flex w-full">
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 rounded-lg hidden lg:inline  bg-gradient-to-r from-violet-900 to-indigo-600">
                  interactive demo
                </div>
                <SectionText title={section} />
              </>
            ) : (
              <>
                <SectionText title={section} />
                <div className="w-1/2 rounded-lg  hidden lg:inline bg-gradient-to-r from-violet-900 to-indigo-600">
                  interactive demo
                </div>
              </>
            )}
          </div>
        );
      })}

      <footer className="w-full h-max p-4 flex justify-between font-bold bg-gray-300">
        <div>2023 Splatter AI inc</div>
        <div className="flex space-x-4">
          <a>contact</a>
          <a>services</a>
          <a>github</a>
          <a>policy</a>
        </div>
      </footer>
    </div>
  );
}
