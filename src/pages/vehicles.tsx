import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Vehicles = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Vehicles</h2>
          <p className="text-muted-foreground">
            Manage your fleet of vehicles
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>
    </div>
  );
};

export default Vehicles;