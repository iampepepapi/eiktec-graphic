"use client";
import { CreditCard, DoorClosed, Home, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";

export const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Billings", href: "/dashboard/billings", icon: CreditCard },
];

export const UserNav = ({
    name,
    email,
    image,
}: {
    name: string;
    email: string;
    image: string;
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                >
                    <Avatar className="rounded-full">
                        <AvatarImage src={image} alt="" />
                        <AvatarFallback>user</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="relative top-4 w-56"
                align="end"
                forceMount
            >
                <DropdownMenuLabel className="">
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-sm font-medium leading-none text-primary">
                            {name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {navItems.map((item, index) => (
                        <DropdownMenuItem asChild key={index}>
                            <Link
                                href={item.href}
                                className="flex w-full items-center justify-between"
                            >
                                {item.name}
                                <span>
                                    <item.icon className="h-4 w-4 text-primary" />
                                </span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuItem
                    className="flex w-full items-center justify-between"
                    asChild
                >
                    <LogoutLink>
                        Logout{" "}
                        <span>
                            <DoorClosed className="h-4 w-4 text-primary" />
                        </span>
                    </LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNav;
