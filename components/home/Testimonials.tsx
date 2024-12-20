import React from "react";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

function Testimonials() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full mx-auto">
      <SectionTitle title="Why people love my work!" />
      <div className="heroElem max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between mx-auto"
            >
              {index === 0 && (
                <>
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100] mx-auto"
                    src="/static/doodles/testimonials/yay.svg"
                  />
                </>
              )}
              <p className="text-base italic relative testimonialQuote text-center">
                "{item.quote}"
              </p>
              <p className="mt-4 text-xs text-fun-gray text-center">
                <b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
                {item.job}
              </p>
              {index === 2 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11 mx-auto"
                  style={{ animationDelay: "0.1s" }}
                  src="/static/doodles/testimonials/squiggle2.svg"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
