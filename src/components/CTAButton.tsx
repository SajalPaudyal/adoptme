import React from "react";

export default function CTABUtton({
  text,
  onClickEvent,
  buttonType,
}: {
  text: string;
  onClickEvent?: () => void;
  buttonType: "primary" | "secondary" | "primary-small" | "secondary-small";
}) {
  const getButtonClass = () => {
    const baseClasses =
      " rounded-lg text-lg font-syne font-semibold focus:outline:none transition-all duration-300";
    switch (buttonType) {
      case "primary":
        return `${baseClasses} px-10 py-3 bg-[#FFA07A] hover:bg-[#FF8C5A] text-white`;
      case "secondary":
        return `${baseClasses} px-10 py-3 bg-[#98FB98] hover:bg-[#7CFC7C] text-[#2E8B57]`;
      case "primary-small":
        return `${baseClasses} px-3 py-2 bg-[#FFA07A] hover:bg-[#FF8C5A] text-white`;

      default:
        return baseClasses;
    }
  };
  return (
    <React.Fragment>
      <button onClick={onClickEvent} className={getButtonClass()}>
        {text}
      </button>
    </React.Fragment>
  );
}
