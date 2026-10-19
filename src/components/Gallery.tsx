"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PROJECTS, SITE } from "@/data/content";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (selected !== null && !d.open) d.showModal();
    if (selected === null && d.open) d.close();
  }, [selected]);

  const project = selected !== null ? PROJECTS[selected] : null;

  return (
    <>
      <div className="columns-1 gap-x-2.5 sm:columns-2 lg:columns-3">
        {PROJECTS.map((p, i) => (
          <button
            key={p.title}
            type="button"
            data-hot
            aria-label={`View: ${p.title}`}
            onClick={() => setSelected(i)}
            className="reveal group relative mb-2.5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-panel text-left text-white transition-transform duration-500 ease-soft after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_40%,rgba(6,28,48,.86))] hover:z-[2] hover:-translate-y-1 hover:-rotate-[0.9deg] focus-visible:z-[2] focus-visible:-translate-y-1 focus-visible:-rotate-[0.9deg]"
          >
            <Image
              src={p.img}
              alt={p.title}
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
              placeholder="blur"
              className="h-auto w-full brightness-[.92] contrast-[1.05] saturate-[.8] transition-[transform,filter] duration-[800ms] ease-soft group-hover:scale-105 group-hover:brightness-[.7] group-hover:saturate-100"
            />
            <span className="absolute top-[42%] left-1/2 z-[2] -translate-x-1/2 translate-y-2.5 font-display text-[22px] font-bold whitespace-nowrap opacity-0 transition-[opacity,translate] duration-[350ms] ease-soft group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              View project →
            </span>
            <span className="absolute inset-x-4 bottom-3.5 z-[1] flex flex-col gap-2">
              <span className="font-display text-xl leading-[1.1] font-bold tracking-normal">{p.title}</span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-labelledby="case-title"
        onClose={() => setSelected(null)}
        onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        className="m-auto max-h-[calc(100vh-28px)] w-[min(1200px,calc(100vw-28px))] overflow-auto rounded-panel border border-line bg-white p-[clamp(24px,4vw,56px)] text-ink backdrop:bg-[rgba(4,32,42,.72)] backdrop:backdrop-blur-md open:animate-pop"
      >
        {project && (
          <>
            <button type="button" onClick={() => setSelected(null)} className="mono absolute top-5 right-6 text-muted hover:text-brand">
              Close ✕
            </button>
            <h2 id="case-title" className="display mt-3.5 mb-10 text-center text-[clamp(36px,6.5vw,96px)] text-brand">
              {project.title}
            </h2>
            <div className="grid items-center gap-[clamp(24px,4vw,56px)] lg:grid-cols-2">
              <Image
                src={project.img}
                alt={project.title}
                sizes="(max-width: 900px) 90vw, 560px"
                placeholder="blur"
                className="max-h-[62vh] w-full -rotate-[1.5deg] rounded-card object-cover"
              />
              <div>
                <p className="mb-[22px] font-display text-xl leading-[1.35] font-medium">
                  {SITE.name} — electrical installation systems and ICT infrastructure, Addis Ababa.
                </p>
                <a href="#contact" onClick={() => setSelected(null)} className="btn">
                  Discuss a similar project <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
