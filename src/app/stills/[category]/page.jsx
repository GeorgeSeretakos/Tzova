import StillsGrid from "../../components/galleries/StillsGrid";
import { stillsByCategory } from "../../../../public/data/stills";
import CategoryNotFound from "../../components/CategoryNotFound";

// REMOVED: generateStaticParams()

export default async function StillsCategoryPage({ params }) {
  try {
    const { category } = await params;

    if (!stillsByCategory || !category) {
      return <CategoryNotFound />;
    }

    const items = stillsByCategory[category];

    if (!items) return <CategoryNotFound />;

    return (
      <div className="space-y-6">
        <StillsGrid items={items} />
      </div>
    );

  } catch (error) {
    return <CategoryNotFound />;
  }
}

// Add this to handle dynamic params
export const dynamicParams = true;