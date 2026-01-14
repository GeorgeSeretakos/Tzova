import FilmsGrid from "../../components/galleries/FilmsGrid";
import { filmsByCategory } from "../../../../public/data/films";
import CategoryNotFound from "../../components/CategoryNotFound";

// REMOVED: generateStaticParams()

export default async function FilmsCategoryPage({ params }) {
  try {
    const { category } = await params;

    if (!filmsByCategory || !category) {
      return <CategoryNotFound />;
    }

    const items = filmsByCategory[category];

    if (!items) return <CategoryNotFound />;

    return (
      <div className="space-y-6">
        <FilmsGrid items={items} />
      </div>
    );

  } catch (error) {
    return <CategoryNotFound />;
  }
}

export const dynamicParams = true;