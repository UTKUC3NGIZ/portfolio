import React from "react";

const icons = {
  Bootstrap: require("../assets/img/icons/Bootstrap.svg").default,
  CSS: require("../assets/img/icons/CSS.svg").default,
  Figma: require("../assets/img/icons/Figma.svg").default,
  Firebase: require("../assets/img/icons/Firebase.svg").default,
  GitHub: require("../assets/img/icons/GitHub.svg").default,
  HTML: require("../assets/img/icons/HTML.svg").default,
  JavaScript: require("../assets/img/icons/JavaScript.svg").default,
  NextJs: require("../assets/img/icons/NextJs.svg").default,
  ReactJs: require("../assets/img/icons/React.svg").default,
  Sass: require("../assets/img/icons/Sass.svg").default,
  Tailwind: require("../assets/img/icons/Tailwind.svg").default,
  VsCode: require("../assets/img/icons/VsCode.svg").default,
};

function Projects({ projects }) {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Custom works
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Things I’ve built so far
            </p>
          </div>

          <div className="mt-12 space-y-16 sm:mt-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col lg:items-center lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24`}
              >
                <div>
                  <img
                    className="object-cover w-full rounded-lg shadow-lg"
                    src={project.projectImage}
                    alt=""
                  />
                </div>

                <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                      {project.projectName}
                    </h3>
                    <a
                      href="https://flowbite.com"
                      title=""
                      className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      {project.projectLink}
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 ml-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                    <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {project.usedFeatures.map((featureName, index) => {
                      const iconPath = icons[featureName];
                      if (!iconPath) return null;
                      return (
                        <div key={index}>
                          <div className="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                            <img
                              data-tooltip-target={`tooltip-${featureName}`}
                              className="object-contain w-auto h-8"
                              src={iconPath}
                              alt=""
                            />
                          </div>
                          <div
                            id={`tooltip-${featureName}`}
                            role="tooltip"
                            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                          >
                            {featureName}
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href={project.projectGithubLink}
                    title=""
                    className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    role="button"
                  >
                    GitHub
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 ml-2 -mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
