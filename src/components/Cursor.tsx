"use client";

import { useEffect, useRef } from "react";

/** Soft follower ring. The rAF loop only runs while it is catching up to the pointer. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(hover: none)").matches) return;

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0, started = false;

    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate(${cx}px,${cy}px)`;
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (!started) { cx = x; cy = y; started = true; }
      el.dataset.on = "";
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const leave = () => { delete el.dataset.on; };
    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-hot]")) el.dataset.hot = "";
      else delete el.dataset.hot;
    };

    addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", over, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] -mt-[17px] -ml-[17px] size-[34px] rounded-full border border-brand opacity-0 transition-[width,height,margin,background-color,opacity] duration-[250ms] ease-soft data-on:opacity-100 data-hot:-m-8 data-hot:size-16 data-hot:bg-brand/20 [@media(hover:none)]:hidden"
    />
  );
}
