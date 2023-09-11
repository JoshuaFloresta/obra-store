"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { ChevronDown } from "lucide-react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className=" mx-auto flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/store"
        className="font-semibold transition-colors hover:text-black ms-6"
      >
        <p>Featured</p>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex font-semibold  transition-colors hover:text-black ">
          Categories{" "}
          <ChevronDown className="text-neutral-800" strokeWidth={1} />{" "}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuSeparator />
          {routes.map((route) => (
            <DropdownMenuItem className="bg-white">
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  route.active ? "text-black" : "text-neutral-500"
                )}
              >
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem className="font-semibold  transition-colors hover:text-black ms-6"></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        href="/artist"
        className="font-semibold  transition-colors hover:text-black ms-6"
      >
        <p>Popular Artist</p>
      </Link>

      <Link
        href="/store"
        className="font-semibold  transition-colors hover:text-black ms-6"
      >
        <p>About Us</p>
      </Link>
    </nav>
  );
};

export default MainNav;
