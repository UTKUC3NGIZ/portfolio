import React from "react";

function Projects() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our work
            </h2>
            <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests.
            </p>
          </div>

          <div class="mt-12 space-y-16 sm:mt-16">
            <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
              <div>
                <img
                  class="object-cover w-full rounded-lg shadow-lg dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg"
                  alt=""
                />
                <img
                  class="object-cover w-full rounded-lg shadow-lg dark:block hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg"
                  alt=""
                />
              </div>

              <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
                <div class="space-y-3">
                  <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                    Flowbite's dashboard
                  </h3>
                  <a
                    href="https://flowbite.com"
                    title=""
                    class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    https://flowbite.com
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 ml-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests. Connecting
                    with your friends and family as well as discovering new ones
                    is easy with features like Groups.
                  </p>
                </div>

                <div class="flex items-center gap-2.5">
                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-html5"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-html5"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    HTML5
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-css3"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-css3"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    CSS3
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-javascript"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/javascript.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-javascript"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    JavaScript
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-tailwind-css"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-tailwind-css"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tailwind CSS
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-typescript"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-typescript"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    TypeScript
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  View case study
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
              <div class="lg:order-2">
                <img
                  class="object-cover w-full rounded-lg shadow-lg dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg"
                  alt=""
                />
                <img
                  class="object-cover w-full rounded-lg shadow-lg dark:block hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg"
                  alt=""
                />
              </div>

              <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
                <div class="space-y-3">
                  <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                    Agency Landing Page
                  </h3>
                  <a
                    href="https://themesberg.com"
                    title=""
                    class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    https://themesberg.com
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 ml-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests. Connecting
                    with your friends and family as well as discovering new ones
                    is easy with features like Groups.
                  </p>
                </div>

                <div class="flex items-center gap-2.5">
                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-wordpress"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/wordpress.svg"
                      alt=""
                    />
                  </div>

                  <div
                    id="tooltip-logo-wordpress"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    WordPress
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-html5"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-html5"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    HTML5
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-css3"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-css3"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    CSS3
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-woocommerce"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/woocommerce.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-woocommerce"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    WooCommerce
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  View case study
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
              <div>
                <img
                  class="object-cover w-full rounded-lg shadow-lg dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg"
                  alt=""
                />
                <img
                  class="object-cover w-full rounded-lg shadow-lg dark:block hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg"
                  alt=""
                />
              </div>

              <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
                <div class="space-y-3">
                  <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                    Mail management system
                  </h3>
                  <a
                    href="https://ui.glass"
                    title=""
                    class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    https://ui.glass
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 ml-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests. Connecting
                    with your friends and family as well as discovering new ones
                    is easy with features like Groups.
                  </p>
                </div>

                <div class="flex items-center gap-2.5">
                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-typescript"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-typescript"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    TypeScript
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-java"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-java"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Java
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-tailwind-css"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-tailwind-css"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tailwind CSS
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-react"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-react"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    React
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-html5"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-html5"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    HTML5
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <img
                      data-tooltip-target="tooltip-logo-amazon-web-services"
                      class="object-contain w-auto h-8"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg"
                      alt=""
                    />
                  </div>
                  <div
                    id="tooltip-logo-amazon-web-services"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Amazon Web Services
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <a
                  href="#"
                  title=""
                  class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  View case study
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
