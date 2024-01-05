"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";


const Button = ({ title, btnType, containerStyles, handleClick }: CustomButtonProps) => (
  <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1`}>
      {title}
    </span>
  </button>
);

export default Button;