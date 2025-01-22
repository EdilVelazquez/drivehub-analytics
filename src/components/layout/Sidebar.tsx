import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Car,
  Users,
  Receipt,
  Settings,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Panel", href: "/", icon: LayoutDashboard },
  { name: "Vehículos", href: "/vehicles", icon: Car },
  { name: "Conductores", href: "/drivers", icon: Users },
  { name: "Gastos", href: "/expenses", icon: Receipt },
  { name: "Configuración", href: "/settings", icon: Settings },
];

const NavContent = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col flex-1 mt-5">
      <ul role="list" className="flex flex-1 flex-col gap-y-4">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className={cn(
                item.href === location.pathname
                  ? "bg-primary-100 text-primary-800"
                  : "text-gray-700 hover:text-primary-800 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <item.icon
                className={cn(
                  item.href === location.pathname
                    ? "text-primary-800"
                    : "text-gray-400 group-hover:text-primary-800",
                  "h-6 w-6 shrink-0"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export function Sidebar() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-xl font-bold">Gestor de Flota</h1>
          </div>
          <NavContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div className="flex h-16 items-center">
          <h1 className="text-xl font-bold">Gestor de Flota</h1>
        </div>
        <NavContent />
      </div>
    </div>
  );
}