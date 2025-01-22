import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Expenses = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Gastos</h2>
          <p className="text-muted-foreground">
            Registre y administre los gastos de su flota
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Agregar Gasto
        </Button>
      </div>
    </div>
  );
};

export default Expenses;