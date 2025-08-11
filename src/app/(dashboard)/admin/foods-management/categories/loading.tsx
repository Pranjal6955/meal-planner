import { CategoryCardsSkeleton } from "./_components/category-cards-skeleton";

const Loading = () => {
  return (
    <div className="space-y-2">
      <div className="mb-6 flex items-center justify-between">
        <div className="h-9 w-32 animate-pulse rounded-md bg-muted" />
        <div className="h-10 w-32 animate-pulse rounded-md bg-muted" />
      </div>
      <CategoryCardsSkeleton />
    </div>
  );
};

export default Loading; 