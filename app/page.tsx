import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import SocialLinks from "@/components/layout/SocialLinks";
import CodeCube from "@/components/three/CodeCube";
import TextAbout from "@/components/AboutMe/TextAbout";
import ImageProfile from "@/components/AboutMe/ImageProfile";
import MainProjects from "@/components/Projects/mainProjects";
import MainCarrer from "@/components/Carrer/MainCarrer";
import MainContact from "@/components/Contact/MainContact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <div className="flex w-full items-center justify-center gap-0 px-0 pt-10">
        <Hero />
        <CodeCube />
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-10 px-0">
        <ImageProfile />
        <TextAbout />
      </div>  
      <MainProjects />
      <MainCarrer />
      <MainContact />
      <SocialLinks />
    </div>
  );
}
