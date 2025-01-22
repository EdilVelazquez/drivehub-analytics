import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, DollarSign, Users, Wrench } from "lucide-react";

const stats = [
  {
    name: "Total Vehicles",
    value: "12",
    icon: Car,
    change: "+2",
    changeType: "increase",
  },
  {
    name: "Active Drivers",
    value: "8",
    icon: Users,
    change: "0",
    changeType: "neutral",
  },
  {
    name: "Monthly Expenses",
    value: "$12,400",
    icon: DollarSign,
    change: "-8%",
    changeType: "decrease",
  },
  {
    name: "Pending Maintenance",
    value: "3",
    icon: Wrench,
    change: "+1",
    changeType: "increase",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your fleet management system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;