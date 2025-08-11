import { MealCardsSkeleton } from "./_components/meal-cards-skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="h-10 w-48 animate-pulse rounded-md bg-muted" />
        <div className="h-10 w-32 animate-pulse rounded-md bg-muted" />
      </div>
      <MealCardsSkeleton />
    </>
  );
};

export default Loading; 