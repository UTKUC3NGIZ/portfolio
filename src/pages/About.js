import React from "react";
import MyImage from "../assets/img/myImage.jpg";

function About() {
  return (
    <>
      <section class="overflow-hidden relative bg-white dark:bg-gray-900">
        <div class="gap-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 xl:grid xl:grid-cols-12">
          <div class="col-span-8">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Discover new product and best possibilities
            </h1>
            <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div class="gap-16 items-center sm:flex">
              <div class="mb-8 text-gray-500 sm:mb-0 dark:text-gray-400">
                <svg
                  class="mb-3 w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h2 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  28 November 2021
                </h2>
                <p class="mb-4 font-light">
                  Join us at FlowBite 2021 to understand what’s next as the
                  global tech and startup ecosystem, rethinks the future of
                  everything.
                </p>
                <a
                  href="#"
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Conference
                  <svg
                    class="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="text-gray-500 dark:text-gray-400">
                <svg
                  class="mb-3 w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h2 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  25+ top notch speakers
                </h2>
                <p class="mb-4 font-light">
                  Here you will find keynote speakers, who all are able to talk
                  about Recruiting. Click on the individual keynote speakers and
                  read more about them and their keynotes.
                </p>
                <a
                  href="#"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-flex items-center"
                >
                  <svg
                    class="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  View list
                </a>
              </div>
            </div>
          </div>
          <div class="hidden absolute top-0 right-0 w-1/3 h-full xl:block">
            <img
              class="object-cover w-full h-full"
              src={MyImage}
              alt="Conference speaker"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
