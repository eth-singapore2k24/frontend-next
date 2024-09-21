import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import highlight from "@/assets/effects/highlight.png";
import { Button } from "../ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { useRouter } from 'next/navigation';
import Image from "next/image";


const Hero = () => {
  const router = useRouter();

  return (
    <div className="container items-center mt-24">
      {/* Introdcing Aegis */}
      <div className="group rounded-full mb-6 border-2 bg-white text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-50">
        <AnimatedShinyText className="inline-flex items-center justify-center px-8 py-1.5 transition ease-out">
          <span className="text-xl">Introducing Aegis</span>
        </AnimatedShinyText>
      </div>
      {/* Slogan */}
      <div className="w-full text-center flex flex-col gap-4 mb-8">
        <h1 className="text-7xl font-display leading-[1.2]">
          Personalized ads without <br /> the cost of{" "}
          <span className="relative px-2 box-border items-center justify-center inline-flex">
            <Image src={highlight} alt="highlight" className="absolute -z-10 top-1" /> personal
            privacy
          </span>
        </h1>
        <p className="text-base uppercase text-muted-foreground tracking-wide leading-6">
          Decentralized ad hosting network with advanced <br /> analytics, but
          without evil cookies 🍪
        </p>
      </div>
      {/* Get Started */}
      <Button
        variant={"expandIcon"}
        Icon={<ArrowRight weight="bold" />}
        iconPlacement="right"
        className="w-64 rounded-xl shadow-button text-2xl "
        onClick={() => router.push('/onboard')}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Hero;
