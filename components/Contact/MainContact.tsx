"use client";

import { useLanguage } from "@/hooks/useLanguage";
import Terminal from "./3DTerminal";

export default function MainContact() {
  const { translations } = useLanguage();
  const contact = translations.contact;

  return (
    <section
      id="contact"
      className="flex w-full"
    >
      {/* Formulário */}
      <div className="w-full p-10 md:w-1/2 lg:px-20">
        <form
          action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}
          method="POST"
          className="
            group
            relative
            flex
            w-full
            flex-col
            gap-5
            border-2
            border-[#ff2f3f]
            bg-[#fff9ee]
            p-6
            shadow-[8px_8px_0px_#8f1111]
            transition-all
            duration-300
            hover:shadow-[11px_11px_0px_#8f1111]
            dark:bg-[#120b0b]
            sm:p-8
          "
        >
          {/* Decoração superior */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b-2
              border-[#ff2f3f]/30
              pb-4
            "
          >
            <span
              className="
                font-mono
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-[#ff2f3f]
              "
            >
              {contact.header}
            </span>

            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff2f3f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8f1111]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#ff2f3f]" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="
                font-mono
                text-sm
                font-bold
                text-[#8f1111]
                dark:text-[#ff2f3f]
              "
            >
              {contact.emailLabel}
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder={contact.emailPlaceholder}
              required
              className="
                w-full
                border-2
                border-[#ff2f3f]/40
                bg-transparent
                px-4
                py-3
                font-mono
                text-sm
                text-[#8f1111]
                outline-none
                transition-all
                duration-300
                placeholder:text-[#8f1111]/40
                hover:border-[#ff2f3f]
                focus:border-[#ff2f3f]
                focus:bg-[#ff2f3f]/5
                focus:shadow-[4px_4px_0px_rgba(143,17,17,0.25)]
                dark:text-[#fff9ee]
                dark:placeholder:text-[#fff9ee]/30
              "
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="
                font-mono
                text-sm
                font-bold
                text-[#8f1111]
                dark:text-[#ff2f3f]
              "
            >
              {contact.messageLabel}
            </label>

            <textarea
              id="message"
              name="message"
              placeholder={contact.messagePlaceholder}
              required
              rows={7}
              className="
                w-full
                resize-none
                border-2
                border-[#ff2f3f]/40
                bg-transparent
                px-4
                py-3
                font-mono
                text-sm
                text-[#8f1111]
                outline-none
                transition-all
                duration-300
                placeholder:text-[#8f1111]/40
                hover:border-[#ff2f3f]
                focus:border-[#ff2f3f]
                focus:bg-[#ff2f3f]/5
                focus:shadow-[4px_4px_0px_rgba(143,17,17,0.25)]
                dark:text-[#fff9ee]
                dark:placeholder:text-[#fff9ee]/30
              "
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="
              mt-2
              w-fit
              border-2
              border-[#ff2f3f]
              bg-[#ff2f3f]
              px-7
              py-3
              font-mono
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-[#fff9ee]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:bg-[#8f1111]
              hover:shadow-[5px_5px_0px_#ff2f3f]
              active:translate-y-0
              active:shadow-none
            "
          >
            {contact.send}
          </button>

          {/* Detalhe decorativo */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-2
              -right-2
              h-4
              w-4
              border-b-2
              border-r-2
              border-[#ff2f3f]
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          />
        </form>
      </div>

      {/* Terminal 3D */}
      <div className="hidden w-1/2 md:flex">
        <Terminal />
      </div>
    </section>
  );
}