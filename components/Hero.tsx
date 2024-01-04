import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
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

        <CustomButton />
      </div>
    </div>
  )
}

export default Hero;