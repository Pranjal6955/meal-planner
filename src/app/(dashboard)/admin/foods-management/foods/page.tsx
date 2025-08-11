import { FoodCards } from "@/app/(dashboard)/admin/foods-management/foods/_components/food-cards";
import { FoodFiltersDrawer } from "@/app/(dashboard)/admin/foods-management/foods/_components/food-filters-drawer";
import { FoodFormDialog } from "@/app/(dashboard)/admin/foods-management/foods/_components/food-form-dialog";

const Page = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Foods Management</h1>
          <p className="text-muted-foreground">
            Manage your food database and nutritional information
          </p>
        </div>
        <FoodFormDialog />
      </div>
      
      <div className="space-y-4">
        <FoodFiltersDrawer />
        <FoodCards />
      </div>
    </div>
  );
};

export default Page;
