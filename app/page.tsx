import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import SocialLinks from "@/components/layout/SocialLinks";
import CodeCube from "@/components/three/CodeCube";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <div className="flex w-full items-center justify-centergap-0 px-0">
        <Hero />
        <CodeCube />
      </div>
      <SocialLinks />
    </div>
  );
}
