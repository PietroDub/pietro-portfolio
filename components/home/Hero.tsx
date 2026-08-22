"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function Hero () {
    const { translations } = useLanguage();
  return (
    <section className="flex w-full md:w-1/2 flex-col items-end px-14 pt-20 ">
      <div className="flex flex-col w-auto items-center justify-center gap-2">
        <p className="font-mono text-base text-[#ff2f3f]">
          {translations.hero.greeting}
        </p>

  <div className="relative">
    <h2 className="font-mono text-2xl text-[#ff2f3f]">
      &lt;div
    </h2>

    <h1
      className="
        ml-10
        text-6xl
        font-bold
        uppercase
        tracking-tight
        text-[#ff2f3f]
        drop-shadow-[3px_3px_0px_#8f1111]
      "
    >
      {translations.hero.title}
    </h1>

    <div className="flex items-center justify-between w-full xl:w-5/6">
      <h2
        className="
          ml-10
          text-2xl
          font-bold
          uppercase
          text-[#8f1111]
          drop-shadow-[2px_2px_0px_#ff2f3f]
        "
      >
         {translations.hero.subtitle}
      </h2>

      <h2 className="font-mono text-2xl text-[#ff2f3f]">
        div/&gt;
      </h2>
    </div>
  </div>

  <p
    className="
      mt-7
      ml-0
      max-w-xl
      font-mono
      text-sm
      leading-relaxed
      text-[#ff2f3f]
    "
  >
    {translations.hero.description}
  </p>

  <div className="w-full flex items-center justify-center">
    <button
    className="
      mt-6
      w-fit
      border-2
      border-[#ff2f3f]
      px-5
      py-4
      font-mono
      text-lg
      font-bold
      uppercase
      text-[#ff2f3f]
      transition-all
      duration-200
      hover:bg-[#ff2f3f]
      hover:text-[#fff9ee]
    "
  >
    {translations.hero.button}
  </button>
  </div>
      </div>
    </section>
  )
}