import { ServingUnitCards } from "@/app/(dashboard)/admin/foods-management/serving-units/_components/serving-unit-cards";
import { ServingUnitFormDialog } from "@/app/(dashboard)/admin/foods-management/serving-units/_components/serving-unit-form-dialog";

const Page = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Serving Units Management</h1>
          <p className="text-muted-foreground">
            Define measurement units for food portions
          </p>
        </div>
        <ServingUnitFormDialog />
      </div>
      
      <ServingUnitCards />
    </div>
  );
};

export default Page;
