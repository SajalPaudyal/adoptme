import React from "react";

export default function CTABUtton({
  text,
  onClickEvent,
  buttonType,
}: {
  text: string;
  onClickEvent?: () => void;
  buttonType: "primary" | "secondary";
}) {
  const getButtonClass = () => {
    const baseClasses =
      "px-10 py-3 rounded-lg text-lg font-syne font-semibold focus:outline:none transition-all duration-300";
    switch (buttonType) {
      case "primary":
        return `${baseClasses} bg-[#FFA07A] hover:bg-[#FF8C5A] text-white`;
      case "secondary":
        return `${baseClasses} bg-[#98FB98] hover:bg-[#7CFC7C] text-[#2E8B57]`;
    default:
        return baseClasses;
    }
  };
  return (
    <React.Fragment>
      <button
        onClick={onClickEvent}
        className={getButtonClass()}
      >
        {text}
      </button>
    </React.Fragment>
  );
}
