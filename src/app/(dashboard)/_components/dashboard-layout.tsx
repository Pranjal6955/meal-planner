"use client";
import { useSignOut } from "@/app/(auth)/sign-in/_services/use-mutations";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { customErrorMap } from "@/lib/customErrorMap";
import * as Collapsible from "@radix-ui/react-collapsible";
import { motion } from "framer-motion";
import {
  Apple,
  Boxes,
  ChevronDown,
  ChevronLeft,
  LogOut,
  Menu,
  Ruler,
  Utensils,
} from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { z } from "zod";

z.setErrorMap(customErrorMap);

type RouteGroup = {
  group: string;
  items: {
    href: string;
    label: string;
    icon: ReactNode;
    roles: string[];
  }[];
};

const ROUTE_GROUPS: RouteGroup[] = [
  {
    group: "Foods Management",
    items: [
      {
        href: "/admin/foods-management/foods",
        label: "Foods",
        icon: <Apple className="mr-2 size-3" />,
        roles: ["admin"],
      },
      {
        href: "/admin/foods-management/categories",
        label: "Categories",
        icon: <Boxes className="mr-2 size-3" />,
        roles: ["admin"],
      },
      {
        href: "/admin/foods-management/serving-units",
        label: "Serving Units",
        icon: <Ruler className="mr-2 size-3" />,
        roles: ["admin"],
      },
    ],
  },
  {
    group: "Meals Management",
    items: [
      {
        href: "/client",
        label: "Meals",
        icon: <Utensils className="mr-2 size-3" />,
        roles: ["admin", "user"],
      },
    ],
  },
];

type DashboardLayoutProps = { children: ReactNode; session: Session };
const DashboardLayout = ({ children, session }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(false);
  const signOutMutation = useSignOut();
  const userRole = session.user?.role || "user";

  const filteredRouteGroups = ROUTE_GROUPS.filter((group) => {
    const accessibleItems = group.items.filter((item) =>
      item.roles.includes(userRole)
    );
    return accessibleItems.length > 0;
  }).map((group) => ({
    ...group,
    items: group.items.filter((item) => item.roles.includes(userRole)),
  }));

  const handleLogout = () => {
    signOutMutation.mutate();
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <div className="bg-background fixed z-30 flex h-16 w-full items-center justify-between border-b px-4 shadow-sm">
        <div className="flex items-center gap-4">
          <Collapsible.Root className="h-full" open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className="m-2" asChild>
              <Button size="icon" variant="outline">
                <Menu className="h-5 w-5" />
              </Button>
            </Collapsible.Trigger>
          </Collapsible.Root>
          <h1 className="text-xl font-semibold text-foreground">
            Meal Planner
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex h-9 items-center gap-2 px-2"
                >
                  <Avatar className="size-8">
                    <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline">{session.user?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="flex items-center gap-3 px-2 py-1.5">
                  <Avatar className="size-10">
                    <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{session.user?.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {session.user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} variant="destructive">
                  <LogOut className="size-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <Collapsible.Root
        className="fixed top-0 left-0 z-20 h-dvh"
        open={open}
        onOpenChange={setOpen}
      >
        <Collapsible.Content forceMount>
          <div
            className={`bg-background fixed top-0 left-0 h-screen w-72 border-r shadow-lg transition-transform duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex h-16 items-center justify-between border-b px-6">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Collapsible.Trigger asChild>
                <Button size="icon" variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </Collapsible.Trigger>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-2">
                {filteredRouteGroups.map((routeGroup) => (
                  <RouteGroup {...routeGroup} key={routeGroup.group} />
                ))}
              </nav>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 flex-1 ${
          open ? "ml-72" : "ml-0"
        }`}
        style={{ marginTop: "4rem" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

type RouteGroupProps = RouteGroup;
const RouteGroup = ({ group, items }: RouteGroupProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <Button
          className="text-foreground/80 flex w-full justify-between font-medium hover:text-foreground"
          variant="ghost"
        >
          {group}
          <motion.div 
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content forceMount>
        <motion.div
          className="ml-4 space-y-1"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {items.map((item) => (
            <Button
              className="w-full justify-start font-normal"
              variant="ghost"
              asChild
              key={item.href}
            >
              <Link
                href={item.href}
                className={`flex items-center rounded-md px-3 py-2 text-sm transition-all hover:bg-accent ${
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </motion.div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export { DashboardLayout };
