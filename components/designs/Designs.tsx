import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {designs.map((item, index) => {
        return (
          <div
            className="w-full"
            key={index}
          >
              <img
                className="w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard"
                src={item.img}
              />
          </div>
        );
      })}
    </div>
  );
}

export default Designs;
