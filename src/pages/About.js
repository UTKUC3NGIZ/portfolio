import React, { useEffect } from "react";
import MyImage from "../assets/img/myImage.jpg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-white dark:bg-gray-900 min-h-[800px] flex items-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-6 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl xl:text-3xl dark:text-white">
              <span className="text-primary-600 dark:text-primary-500">
                About Me <br />
              </span>
              I started learning html/css/js at the age of 18, I wanted to be a
              software developer since my childhood. I am currently building
              websites.
            </h2>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="rounded-lg shadow-lg" src={MyImage} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
