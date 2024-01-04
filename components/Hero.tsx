"use Client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";
import CustomButton from "./CustomButton";

const Hero = () => {
  
  const handleScroll = () => {

  }


  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, and rent a car quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streaming your cae rental experience much
          easier and faster with our service.
        </p>

        <CustomButton 
        title="Explore Now"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
    </div>
  )
}

export default Hero;