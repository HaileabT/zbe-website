import Image from "next/image";
import { SITE, zbeLogo } from "@/data/content";

const col = "flex flex-col items-start gap-1.5";
const label = "mono mb-1.5 text-white";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mx-2 mt-[50px] mb-2 content-auto rounded-panel bg-brand px-[clamp(20px,4vw,56px)] pt-[clamp(40px,6vw,90px)] pb-7 text-white [contain-intrinsic-size:auto_720px] lg:mx-3.5 lg:mt-[70px] lg:mb-3.5 [&_:focus-visible]:outline-white [&_a:hover]:underline"
    >
      <div>
        <h2 className="display display-xl mb-9">Ready to power up<br />your projects?</h2>
        <a
          href={`mailto:${SITE.email}`}
          className="btn bg-white px-[34px] py-[22px] text-xl text-brand hover:bg-white hover:no-underline hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,.4)]"
        >
          Get a quote <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="mt-[72px] grid gap-6 border-t border-white/30 pt-7 lg:grid-cols-[2fr_1fr_1fr]">
        <div className={col}>
          <a href="#top" className="block" aria-label={SITE.name}>
            <Image src={zbeLogo} alt={SITE.name} width={57} height={54} sizes="57px" className="rounded-md" />
          </a>
          <p className="mt-3.5 max-w-[460px]">
            We specialize in electrical installation systems and ICT infrastructure. With a commitment to innovation and
            quality, we deliver state-of-the-art solutions tailored to your needs.
          </p>
        </div>
        <nav aria-label="Footer" className={`${col} font-mono text-[13px]`}>
          <p className={label}>Navigate</p>
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
        </nav>
        <address className={`${col} font-mono text-[13px]`}>
          <p className={label}>Contact</p>
          <span>{SITE.address.city}, {SITE.address.country}</span>
          <span>{SITE.address.street}</span>
          {SITE.phones.map((p) => <a key={p.href} href={p.href}>{p.label}</a>)}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </address>
      </div>
    </footer>
  );
}
