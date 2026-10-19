"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FEATURED, PROJECTS, SITE, WALL_A, WALL_B, zbeLogo } from "@/data/content";

const SWAP_MS = 450; // keep in sync with the duration-[450ms] classes below

/**
 * Three copies per column so the loop is seamless (translate by one copy).
 * The column that scrolls up starts at its first copy; the one anchored to the bottom
 * shows its last copy, so those are the images visible on first paint and load eagerly.
 */
function WallColumn({ items, className, reverse }: { items: readonly number[]; className: string; reverse?: boolean }) {
  const visibleCopy = reverse ? 2 : 0;
  return (
    <div
      className={`absolute flex flex-col gap-2.5 will-change-transform group-hover/wall:[animation-play-state:paused] group-data-offscreen/hero:[animation-play-state:paused] motion-reduce:animate-none ${className}`}
    >
      {[0, 1, 2].flatMap((copy) =>
        items.map((p) => (
          <Image
            key={`${copy}-${p}`}
            src={PROJECTS[p].img}
            alt=""
            sizes="(max-width: 900px) 1px, 24vw"
            loading={copy === visibleCopy ? "eager" : "lazy"}
            className="w-full rounded-[14px] saturate-[.85] contrast-[1.05]"
          />
        )),
      )}
    </div>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Respect reduced motion: start with the rotation paused.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setUserPaused(true);
  }, []);

  // Only the first feature image is on the critical path; mount the rest after load.
  useEffect(() => {
    if (document.readyState === "complete") { setLoaded(true); return; }
    const onLoad = () => setLoaded(true);
    addEventListener("load", onLoad, { once: true });
    return () => removeEventListener("load", onLoad);
  }, []);

  // Pause the rotation and the wall while the hero is scrolled out of view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOffscreen(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // The progress bar (CSS animation) is the timer: when it ends, fade out, swap, fade in.
  useEffect(() => {
    if (!swapping) return;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % FEATURED.length);
      setSwapping(false);
    }, SWAP_MS);
    return () => clearTimeout(t);
  }, [swapping]);

  const current = PROJECTS[FEATURED[index]];

  return (
    <header
      ref={ref}
      id="top"
      data-swapping={swapping || undefined}
      data-offscreen={offscreen || undefined}
      data-hold={userPaused || undefined}
      className="bg-grid group/hero relative grid grid-cols-1 overflow-hidden rounded-b-panel border-b border-line bg-panel lg:h-svh lg:min-h-[620px] lg:grid-cols-[56fr_44fr]"
    >
      <div className="relative flex flex-col bg-[linear-gradient(90deg,var(--color-panel)_85%,transparent)] px-[22px] pt-[22px] lg:px-10 lg:pt-8">
        <div className="flex items-center justify-between gap-5 lg:justify-start lg:gap-14">
          <a href="#top" className="block pointer-coarse:flex pointer-coarse:min-h-11 pointer-coarse:items-center" aria-label={SITE.name}>
            <Image src={zbeLogo} alt={SITE.name} width={48} height={46} sizes="48px" loading="eager" className="rounded-md" />
          </a>
          <nav aria-label="Primary" className="flex gap-2 text-sm">
            {[["#gallery", "Gallery"], ["#clients", "Clients"], ["#services", "Services"], ["#contact", "Contact"]].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative py-px pointer-coarse:py-3 pointer-coarse:after:bottom-2.5 after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-0 after:bg-brand after:transition-[width] after:duration-300 after:ease-soft hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-[clamp(28px,6vh,72px)] max-w-[720px]">
          <h1 className="display text-[clamp(36px,4.6vw,66px)] leading-[1.02] text-ink">
            Electrical and ICT engineering, <span className="text-brand">built in Addis&nbsp;Ababa.</span>
          </h1>
          <p className="mt-5 mb-7 max-w-[560px] text-lg leading-[1.55] text-soft">
            Electrical installation, ICT infrastructure, PCB design and prototyping.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#gallery" className="btn">View our work <span aria-hidden="true">→</span></a>
            <a href="#contact" className="btn btn-ghost">Get a quote</a>
          </div>
        </div>

        <figure className="relative mt-12 -ml-[22px] aspect-[16/10] w-full sm:aspect-[2/1] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:ml-0 lg:aspect-[2/1] lg:h-[clamp(200px,calc(100svh-600px),400px)] lg:w-auto">
          {FEATURED.map((p, i) => (i === 0 || loaded) && (
            <Image
              key={p}
              src={PROJECTS[p].img}
              alt={i === index ? PROJECTS[p].title : ""}
              aria-hidden={i !== index}
              fill
              sizes="(max-width: 900px) 92vw, 680px"
              placeholder="blur"
              preload={i === 0}
              className={`rounded-tr-card object-cover transition-opacity duration-[450ms] ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <p
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-[1] bg-[linear-gradient(0deg,rgba(6,28,48,.82),transparent)] px-5 pt-12 pb-4 font-display text-xl leading-tight font-bold text-white transition-opacity duration-[450ms] ease-soft group-data-swapping/hero:opacity-0 lg:text-2xl"
          >
            {current.title}
          </p>
          <figcaption className="p-2 absolute -top-[34px] -right-3.5 z-[1] grid size-[118px] -rotate-10 place-content-center rounded-full bg-warm text-center text-[#2b1600] shadow-[0_14px_40px_-12px_rgba(245,130,32,.6)] lg:-top-11 lg:-right-11">
            <b className="font-display text-2xl leading-none font-bold tracking-[-.01em]">24/7</b>
            <small className="mt-1 font-mono text-[10px] font-medium tracking-[.06em] uppercase">emergency support</small>
          </figcaption>
        </figure>

        <button
          type="button"
          aria-pressed={userPaused}
          onClick={() => setUserPaused((v) => !v)}
          className="mono absolute right-[30px] bottom-3.5 z-[2] rounded-md bg-[rgba(6,28,48,.55)] px-2.5 py-1.5 pointer-coarse:px-4 pointer-coarse:py-3.5 text-white backdrop-blur-sm lg:right-6 lg:bottom-4 lg:bg-transparent lg:text-muted lg:backdrop-blur-none lg:hover:text-brand"
        >
          {userPaused ? "Play" : "Pause"}
        </button>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-line">
          <i
            key={index}
            onAnimationEnd={() => setSwapping(true)}
            className="block h-full w-0 animate-fill bg-brand group-data-hold/hero:[animation-play-state:paused] group-data-offscreen/hero:[animation-play-state:paused]"
          />
        </div>
      </div>

      <aside aria-hidden="true" className="group/wall relative hidden min-h-0 overflow-hidden lg:block">
        <WallColumn items={WALL_A} className="top-0 left-2.5 w-[calc(50%-15px)] animate-scroll-up" />
        <WallColumn items={WALL_B} reverse className="bottom-0 left-[calc(50%+5px)] w-[calc(50%-15px)] animate-scroll-down" />
      </aside>
    </header>
  );
}
