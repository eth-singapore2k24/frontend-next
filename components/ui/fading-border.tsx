import HorizontalFadingBorder from "@/assets/effects/horizontal-fading-border.svg";
import VerticalFadingBorder from "@/assets/effects/vertical-fading-border.svg";
import Image from "next/image";

export function FadingBorder() {
  const horizontalBorderWidth = "1400px";
  return (
    <>
      <Image
        src={HorizontalFadingBorder}
        className={`absolute top-0 max-w-[${horizontalBorderWidth}]`}
        alt=""
      />
      <Image
        src={HorizontalFadingBorder}
        className={`absolute bottom-0 max-w-[${horizontalBorderWidth}]`}
        alt=""
      />
      <Image
        src={VerticalFadingBorder}
        className={`absolute left-0 max-h-[calc(100vh-60px)]`}
        alt=""
      />
      <Image
        src={VerticalFadingBorder}
        className={`absolute right-0 max-h-[calc(100vh-60px)]`}
        alt=""
      />
    </>
  );
}
