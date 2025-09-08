"use client";

import { Carousel } from "flowbite-react";
import { CaurselTheme } from "../theme/caursel-theme";

export function HomeCoursel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel theme={CaurselTheme}>
        <img
          src="https://bincrusher.com/wp-content/uploads/2020/07/iStock-1057790090.jpg"
          alt="..."
        />
        <img
          src="https://metrostor.us/wp-content/uploads/2023/11/Curbside-Collections-_News-Article-Headers-2200x670-1.jpg"
          alt="..."
        />
        <img
          src="https://powerknot.com/wp-content/uploads/2021/11/Composting-1024x341-1.jpeg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
