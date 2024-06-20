import React from "react";

const CV = () => {
  return (
    <button className="border-2 border-primary text-primary min-w-[160px]  min-h-[48px] rounded-md font-semibold hover:text-lg transition-all duration-300">
      <a href={require("../assets/My Resume.pdf")}>Download CV</a>
    </button>
  );
};

export default CV;
