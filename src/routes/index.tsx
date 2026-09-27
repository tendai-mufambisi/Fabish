import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { BackToTop } from "@/components/site/BackToTop";
import { PageLoader } from "@/components/site/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { WorkStrip } from "@/components/sections/WorkStrip";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Projects } from "@/components/sections/Projects";
import { Transformation } from "@/components/sections/Transformation";
import { Founder } from "@/components/sections/Founder";
import { Team } from "@/components/sections/Team";
import { CompanyProfile } from "@/components/sections/CompanyProfile";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Process } from "@/components/sections/Process";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

const title = "Fabish House Finishings | Premium Home Finishing Services in Zimbabwe";
const description =
  "Transforming Zimbabwean houses into masterpieces with professional tiling, plastering, painting, ceilings and paving. Quality craftsmanship for modern African homes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Fabish House Finishings",
          slogan: "Transforming Houses Into Masterpieces",
          description,
          telephone: "+263771953246",
          email: "info@fabishfinishings.co.zw",
          url: "https://fabishfinishings.co.zw",
          areaServed: "Zimbabwe",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Harare",
            addressRegion: "Harare",
            addressCountry: "ZW",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <WorkStrip />
        <About />
        <Services />
        <Projects />
        <Transformation />
        <VideoShowcase />
        <Testimonials />
        <CtaBand />
        <WhyUs />
        <Founder />
        <Team />
        <CompanyProfile />
        <Process />
        <QuoteForm />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
    </>
  );
}
