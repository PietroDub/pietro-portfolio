import { ChevronRight } from "lucide-react";

interface ButtonProps {
  onClick: () => void;
}

export default function ButtonRight({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Next project"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-[#8f1111]/20
        text-[#ff2f3f]
        transition-all
        duration-300
        hover:bg-[#ff2f3f]
        hover:text-white
        hover:scale-105
        active:scale-95
        focus:outline-none
      "
    >
      <ChevronRight size={28} />
    </button>
  );
}