"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { ModeToggle } from "./ToggleDarkMode";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";

export default function NavbarMenu({ children }: { children: React.ReactNode }) {
  return (
    <nav className=" md:flex justify-center items-center ">

      {/* Desktop */}
      <NavigationMenu className=" hidden md:block ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Convertisseur
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Taxes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pourboires
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>

          <NavigationMenuItem className="mx-4">{children}</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild className=" fixed md:hidden ">
          <Button variant={"outline"}>
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent className=' md:hidden'>
          <div className=' flex flex-col items-center gap-8 mt-8 w-full '>
            <Link href={'#'}><Button variant={'ghost'} size={"lg"}>Convertisseur</Button></Link>
            <Link href={'#'}><Button variant={'ghost'} size={"lg"}>Taxes</Button></Link>
            <Link href={'#'}><Button variant={'ghost'} size={"lg"}>Pourboires</Button></Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
