import Hero from "../components/home/Hero";
import DualEntry from "../components/home/DualEntry";
import CategoryShowcase from "../components/home/CategoryShowCase";
import MiniBio from "../components/home/MiniBio";

export default async function HomePage({ params }) {
  const { locale } = await params;

  return (
    <main className="bg-[#031526] text-[#EAEAEA]">
      <Hero
        images={[
          "/images/weddings/40.jpg",
          "/images/baptisms/46.jpg",
          "/images/advertisement/32.jpg",
          "/images/portraits/7.jpg",
          "/images/films-and-theatre/20.jpg",
          "/images/advertisement/18.jpg",
          "/images/advertisement/23.jpg",
        ]}
        logoSrc="/logo/white(1).png"
        autoPlay={true}
      />

      <section className="max-w-6xl mx-auto px-4 py-14">
        <DualEntry
          locale={locale}
          variant="boxed"
          stills={{ src: "/images/advertisement/25.jpg", alt: "Stills cover" }}
          films={{
            src: "/images/thumbnails/movies/thimamai.jpg",
            alt: "Films cover",
          }}
        />
      </section>

      <section className="mx-auto">
        <CategoryShowcase locale={locale} />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <MiniBio locale={locale} />
      </section>
    </main>
  );
}
