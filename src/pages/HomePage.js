import MyImage from "../assets/img/myImage.jpg";
function HomePage({ projects }) {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              Hi , <br /> My name is <br />
              <span className="text-primary-600 dark:text-primary-500">
                Utku <br />
              </span>{" "}
              I build things for web
            </h1>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="rounded-lg shadow-lg" src={MyImage} alt="mockup" />
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Tech Stack
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Technologies I’ve been working with recently
          </p>
        </div>
        <div className="grid mt-12 max-w-screen-xl grid-cols-2 gap-8 px-4 pb-8 mx-auto text-gray-500 lg:pb-16 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex justify-center">
            <i className="devicon-nextjs-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-react-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-tailwindcss-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white "></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-firebase-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-sass-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-javascript-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-html5-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-css3-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-figma-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-github-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-bootstrap-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" className="flex justify-center">
            <i className="devicon-vscode-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
        </div>
      </section>
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

          <div className="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div>
                <img
                  className="object-cover w-full rounded-lg shadow-lg  mb-6"
                  src={project.projectImage}
                  alt=""
                />
                <div className="space-y-3 mb-6">
                  <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    <svg
                      aria-hidden="true"
                      class="w-3 h-3 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {project.projectType}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      className="hover:underline"
                    >
                      {project.projectName}
                    </a>
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    target="_blank"
                    href={project.projectGithubLink}
                    title=""
                    className="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    role="button"
                  >
                    GitHub
                  </a>

                  <a
                    target="_blank"
                    href={project.projectLink}
                    title=""
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-2 -ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Live preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
