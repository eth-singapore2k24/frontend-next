import leftGradient from "@/assets/effects/gradient-left.svg";
import rightGradient from "@/assets/effects/gradient-right.svg";
import Image from "next/image";

export const BackgroundMakeup = () => {
  return (
    <>
      <Image src={leftGradient} className="fixed h-full top-2 -left-0" alt="" />
      <Image src={rightGradient} className="fixed h-full top-2 -right-0" alt="" />
    </>
  );
};
