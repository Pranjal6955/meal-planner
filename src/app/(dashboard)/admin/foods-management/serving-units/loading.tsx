import { ServingUnitCardsSkeleton } from "./_components/serving-unit-skeletons";

const Loading = () => {
  return (
    <div className="space-y-2">
      <div className="mb-6 flex items-center justify-between">
        <div className="h-9 w-32 animate-pulse rounded-md bg-muted" />
        <div className="h-10 w-32 animate-pulse rounded-md bg-muted" />
      </div>
      <ServingUnitCardsSkeleton />
    </div>
  );
};

export default Loading; 