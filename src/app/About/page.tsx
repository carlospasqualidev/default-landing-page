import Image from "next/image";
import { svg } from "@/assets";
export function About() {
  return (
    <div className="flex gap-12 justify-center h-screen">
      <Image
        src={svg.AboutMe}
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-4 justify-center text-center">
        <text className="text-4xl">What is Lorem Ipsum?</text>
        <text className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </text>
      </div>
    </div>
  );
}
