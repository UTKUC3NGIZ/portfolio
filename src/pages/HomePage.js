import React from "react";
import Logo from "../assets/img/logo.svg";
import MyImage from "../assets/img/myImage.jpg";
function HomePage() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              Hi , <br /> My name is <br />
              <span class="text-primary-600 dark:text-primary-500">
                Utku <br />
              </span>{" "}
              I build things for web
            </h1>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img class="rounded-lg shadow-lg" src={MyImage} alt="mockup" />
          </div>
        </div>
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Custom works
          </h2>
          <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Things I’ve built so far
          </p>
        </div>
        <div class="grid mt-12 max-w-screen-xl grid-cols-2 gap-8 px-4 pb-8 mx-auto text-gray-500 lg:pb-16 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" class="flex justify-center">
            <i class="devicon-nextjs-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-react-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-tailwindcss-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white "></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-firebase-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-sass-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-javascript-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-html5-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-css3-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-figma-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-github-original colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-bootstrap-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
          <a href="#" class="flex justify-center">
            <i class="devicon-vscode-plain colored xl:text-8xl text-7xl hover:opacity-100 opacity-90 dark:hover:text-white"></i>
          </a>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Custom works
            </h2>
            <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Things I’ve built so far
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg"
                alt=""
              />
              <img
                class="object-cover w-full rounded-lg shadow-lg hidden dark:block mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg"
                alt=""
              />
              <div class="space-y-3 mb-6">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Figma design
                </span>
                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">
                    Agency Landing Page
                  </a>
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Flowbite helps you connect with friends, family and
                  communities of people who share your interests.
                </p>
              </div>
              <div class="flex items-center gap-4">
                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Case study
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1"
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

            <div>
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool.jpg"
                alt=""
              />
              <img
                class="object-cover w-full rounded-lg shadow-lg mb-6 dark:block hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool-dark.jpg"
                alt=""
              />
              <div class="space-y-3 mb-6">
                <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
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
                  Front-end
                </span>
                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">
                    Analytics tool
                  </a>
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Flowbite helps you connect with friends, family and
                  communities of people who share your interests.
                </p>
              </div>
              <div class="flex items-center gap-4">
                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Case study
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1"
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

            <div>
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management.jpg"
                alt=""
              />
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management-dark.jpg"
                alt=""
              />
              <div class="space-y-3 mb-6">
                <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Back-end
                </span>
                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">
                    Task management system
                  </a>
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Flowbite helps you connect with friends, family and
                  communities of people who share your interests.
                </p>
              </div>
              <div class="flex items-center gap-4">
                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Case study
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1"
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

            <div>
              <img
                class="object-cover w-full rounded-lg shadow-lg mb-6 dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg"
                alt=""
              />
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg"
                alt=""
              />
              <div class="space-y-3 mb-6">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Figma design
                </span>
                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">
                    Flowbite's dashboard
                  </a>
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Flowbite helps you connect with friends, family and
                  communities of people who share your interests.
                </p>
              </div>
              <div class="flex items-center gap-4">
                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Case study
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1"
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

            <div>
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo.jpg"
                alt=""
              />
              <img
                class="object-cover w-full rounded-lg shadow-lg mb-6 dark:block hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg"
                alt=""
              />
              <div class="space-y-3 mb-6">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Figma design
                </span>
                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">
                    NGO Landing Page
                  </a>
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Flowbite helps you connect with friends, family and
                  communities of people who share your interests.
                </p>
              </div>
              <div class="flex items-center gap-4">
                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Case study
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1"
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

            <div>
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg"
                alt=""
              />
              <img
                class="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg"
                alt=""
              />
              <div class="space-y-3 mb-6">
                <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
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
                  Front-end
                </span>
                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">
                    Mail management system
                  </a>
                </h3>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Flowbite helps you connect with friends, family and
                  communities of people who share your interests.
                </p>
              </div>
              <div class="flex items-center gap-4">
                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Case study
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1"
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
