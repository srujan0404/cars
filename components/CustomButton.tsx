"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";


const Button = ({ title, containerStyles, handleClick }: CustomButtonProps) => (
  <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1`}>
      {title}
    </span>
  </button>
);

export default Button;