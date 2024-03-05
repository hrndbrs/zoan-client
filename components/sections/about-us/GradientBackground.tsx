import Image from "next/image";

export default function GradientBackground() {
  return (
    <section className="flex justify-center items-center h-[34.125rem] bg-gradient-to-r from-z-teal to-z-indigo px-12">
      <Image
        src="/icons/zoan-h-light.svg"
        width={100}
        height={100}
        className="!w-[26.5rem]"
        alt="zoan-light"
      />
    </section>
  );
}
