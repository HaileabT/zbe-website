import Clients from "@/components/Clients";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SERVICES, SITE, zbeLogo } from "@/data/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phones[0].label.replace(/\s/g, ""),
  logo: `${SITE.url}${zbeLogo.src}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.countryCode,
  },
  contactPoint: SITE.phones.map((p) => ({
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: p.label.replace(/\s/g, ""),
    email: SITE.email,
    availableLanguage: "English",
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.text, provider: { "@type": "Organization", name: SITE.name } },
    })),
  },
};

export default function Home() {
  return (
    <>
      <Cursor />
      <Hero />

      <main id="main" className="px-2 lg:px-3.5">
        <section className="px-[clamp(8px,2vw,28px)] pt-[clamp(72px,10vw,150px)] pb-10" id="gallery" aria-labelledby="gallery-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)]">
            <h2 id="gallery-title" className="display display-xl">Our work</h2>
          </div>
          <Gallery />
        </section>

        <section className="mt-[60px] rounded-panel bg-tint px-[clamp(20px,4vw,56px)] pt-[clamp(72px,10vw,150px)] pb-[clamp(60px,8vw,120px)]" id="services" aria-labelledby="services-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)]">
            <h2 id="services-title" className="display display-xl">What we do</h2>
          </div>
          <Services />
        </section>

        <section className="content-auto px-[clamp(8px,2vw,28px)] pt-[clamp(72px,10vw,150px)] pb-10 [contain-intrinsic-size:auto_1500px]" id="clients" aria-labelledby="clients-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)]">
            <h2 id="clients-title" className="display display-xl">Trusted by</h2>
          </div>
          <Clients />
        </section>
      </main>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
