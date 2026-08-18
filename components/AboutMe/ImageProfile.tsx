import Image from "next/image";

export default function ImageProfile() {
  return (
    <div className="group relative w-1/2 flex items-center justify-center">
      <div className="group relative mx-auto w-auto">
        {/* Quadrado de trás */}
        <div
          className="
        absolute
        -left-5
        top-7
        h-[350px]
        w-[350px]
        bg-[#ff2f3f]
        transition-transform
        duration-500
        ease-out
        group-hover:-translate-x-2
        group-hover:translate-y-2
      "
        />

        {/* Quadrado principal */}
        <div
  className="
    relative
    h-[350px]
    w-[350px]
    overflow-hidden
    bg-[#b80f1b]
    shadow-[8px_8px_0px_rgba(143,17,17,0.25)]
    transition-transform
    duration-500
    ease-out
    group-hover:translate-x-1
    group-hover:-translate-y-1
  "
>
  {/* Textura de pontos */}
  <div
    className="
      absolute
      inset-0
      z-0
      opacity-60
      transition-transform
      duration-700
      group-hover:translate-x-3
      group-hover:translate-y-3
    "
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(255,249,238,0.35) 1.5px, transparent 1.5px)",
      backgroundSize: "14px 14px",
    }}
  />

  {/* Brilho diagonal */}
  <div
    className="
      absolute
      inset-0
      z-0
      bg-[linear-gradient(135deg,transparent_0%,rgba(255,47,63,0.25)_50%,transparent_100%)]
    "
  />

  {/* Foto */}
  <Image
    src="/PiePic.png"
    alt="Profile Image"
    width={350}
    height={350}
    priority
    className="
      relative
      z-10
      h-full
      w-full
      object-contain
    "
  />
</div>
      </div>
    </div>
  );
}
