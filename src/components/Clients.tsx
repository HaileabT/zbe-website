import Image from "next/image";
import { CLIENTS, TESTIMONIALS } from "@/data/content";

export default function Clients() {
  return (
    <>
      <ul className="mb-16 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {CLIENTS.map((c) => (
          <li
            key={c.name}
            className="reveal group grid h-28 place-items-center rounded-[14px] bg-white px-[18px] py-4 shadow-[inset_0_0_0_1px_var(--color-line)] transition-[transform,box-shadow] duration-300 ease-soft hover:-translate-y-[3px] hover:shadow-[inset_0_0_0_1px_var(--color-brand),0_14px_30px_-18px_var(--color-brand)]"
          >
            <Image
              src={c.logo}
              alt={c.name}
              sizes="(max-width: 520px) 45vw, 180px"
              className="h-auto max-h-16 w-auto max-w-full object-contain transition-transform duration-300 ease-soft group-hover:scale-[1.06]"
            />
          </li>
        ))}
      </ul>

      <h3 className="mono mb-[18px] font-normal text-muted">Testimonials</h3>
      <div className="mb-10 grid gap-2.5 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.title} className="reveal relative overflow-hidden rounded-card bg-panel px-[26px] pt-7 pb-[30px]">
            <span aria-hidden="true" className="absolute -top-1.5 right-[18px] font-display text-[120px] leading-none font-bold text-brand/[.16]">
              &quot;
            </span>
            <h4 className="mb-3 max-w-[80%] font-display text-xl leading-[1.2] font-bold tracking-normal text-brand-deep">{t.title}</h4>
            <blockquote className="text-soft">{t.text}</blockquote>
          </figure>
        ))}
      </div>
    </>
  );
}
