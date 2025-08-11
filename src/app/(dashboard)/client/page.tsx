import { MealCards } from "@/app/(dashboard)/client/_components/meal-cards";
import { MealFilters } from "@/app/(dashboard)/client/_components/meal-filters";
import { MealFormDialog } from "@/app/(dashboard)/client/_components/meal-form-dialog";
import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth();
  if (!session) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meal Planning</h1>
          <p className="text-muted-foreground">
            Plan and track your daily meals and nutrition
          </p>
        </div>
        <MealFormDialog session={session} />
      </div>
      
      <div className="space-y-4">
        <MealFilters />
        <MealCards />
      </div>
    </div>
  );
};

export default Page;
