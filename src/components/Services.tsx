"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS, SERVICES } from "@/data/content";

export default function Services() {
  const [active, setActive] = useState(0);
  const preview = PROJECTS[active % PROJECTS.length];

  return (
    <div className="grid items-start gap-[clamp(24px,4vw,64px)] lg:grid-cols-[1fr_minmax(260px,34%)]">
      <ol>
        {SERVICES.map((s, i) => (
          <li key={s.title} className="border-t border-tint-line last:border-b">
            <div
              tabIndex={0}
              data-active={i === active || undefined}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="reveal group/svc grid grid-cols-[56px_1fr] gap-x-4 gap-y-2 py-[26px] transition-[padding] duration-[350ms] ease-soft hover:pl-3 data-active:pl-3"
            >
              <span className="pt-3 font-mono text-[13px] font-medium text-brand transition-colors duration-[250ms] group-hover/svc:text-ink group-data-active/svc:text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[clamp(26px,3.4vw,46px)] leading-[1.05] font-bold tracking-[-.02em]">{s.title}</h3>
              <p className="col-start-2 mt-1.5 max-w-[520px] text-soft">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className="sticky top-7 hidden aspect-[4/5] rotate-[1.5deg] overflow-hidden rounded-card bg-tint-line lg:block">
        <Image key={preview.title} src={preview.img} alt="" fill sizes="(max-width: 900px) 1px, 34vw" placeholder="blur" className="animate-fade-in object-cover" />
        <span className="mono absolute bottom-3.5 left-3.5 z-[1] rounded-md bg-brand px-2.5 py-1.5 text-white">Selected work</span>
      </div>
    </div>
  );
}
