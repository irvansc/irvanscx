"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderButtons = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button onClick={() => swiper.slidePrev()} className={btnStyles}>
        <PiCaretLeftBold size={36} className={iconStyles} />
      </button>
      <button onClick={() => swiper.slideNext()} className={btnStyles}>
        <PiCaretRightBold size={36} className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
