import React from "react";

interface ButtonProps {
   buttonLabel: string;
   onSubmit?: () => void;
   size: "small" | "medium" | "large";
   type: "primary" | "secondary" 
}

const Button = ({ buttonLabel }: ButtonProps) => {
   return (
      <button className="bg-white text-base font-bold rounded-full py-[6px] mt-3 px-5 text-[13px] w-fit hover:scale-105 hover:cursor-pointer">
         {buttonLabel}
      </button>
   );
};

export default Button;
