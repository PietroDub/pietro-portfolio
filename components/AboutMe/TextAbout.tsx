export default function TextAbout() {
  return (
    <div className="flex w-full lg:w-1/2 max-w-xl flex-col p-15">
      {/* Title */}
      <h2
        className="
          font-sans
          text-3xl
          font-bold
          uppercase
          leading-none
          text-[#ff2f3f]
          drop-shadow-[2px_2px_0px_#8f1111]

          md:text-4xl
        "
      >
        ABOUT ME
      </h2>

      {/* Name */}
      <div className="mt-1 flex flex-col">
        <h1
          className="
            ml-0
            text-6xl
            font-bold
            uppercase
            leading-[0.85]
            tracking-tight
            text-[#ff2f3f]
            drop-shadow-[4px_4px_0px_#8f1111]

            md:text-7xl
            lg:text-8xl
          "
        >
          PIETRO
        </h1>

        <h2
          className="
            ml-24
            text-6xl
            font-bold
            uppercase
            leading-[0.85]
            tracking-tight
            text-transparent
            [-webkit-text-stroke:2px_#ff2f3f]

            md:ml-28
            md:text-7xl
            lg:ml-32
            lg:text-8xl
          "
        >
          VITO
        </h2>
      </div>

      {/* Description */}
      <p
        className="
          mt-7
          border-b-10
          border-[#ff2f3f]
          pb-5
          font-mono
          text-sm
          leading-relaxed
          text-[#ff2f3f]

          md:text-base

          dark:border-[#ff2f3f]
          dark:text-[#ff2f3f]
        "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        cupiditate tenetur ipsa quis natus incidunt.
      </p>
    </div>
  );
}