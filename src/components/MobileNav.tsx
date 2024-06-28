"use client";

import { PRODUCT_CATEGORIES, Category } from "@/config";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    LoginLink,
    RegisterLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const MobileNav = () => {
    const pathname = usePathname();

    return (
        /*
            TODO
            add auth session for mobile view and UserNav
        */
        <>
            <Sheet>
                <SheetTrigger className="group -m-2 flex items-center p-2 md:hidden">
                    <Menu className="h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-400" />
                </SheetTrigger>
                <SheetContent className="flex w-full flex-col overflow-y-auto pr-0 sm:max-w-full">
                    <SheetHeader>
                        <div>
                            <SheetTitle className="flex items-center gap-4">
                                Mobile Menu
                                <Button variant={"ghost"}>
                                    <LoginLink>Login</LoginLink>
                                </Button>
                                <Button variant={"ghost"}>
                                    <RegisterLink>Create Account</RegisterLink>
                                </Button>
                            </SheetTitle>
                        </div>
                    </SheetHeader>

                    <div className="">
                        <ul>
                            {PRODUCT_CATEGORIES.map((category: Category) => (
                                <li
                                    key={category.label}
                                    className="space-y-10 px-4 pb-8 pt-10"
                                >
                                    <div className="border-b border-gray-200">
                                        <div className="-mb-px flex">
                                            <p className="flex-1 whitespace-nowrap border-b-2 border-transparent py-4 text-base font-medium text-gray-900">
                                                {category.label}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                        {(category.featured || []).map(
                                            (item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative text-sm"
                                                >
                                                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <Image
                                                            fill
                                                            src={
                                                                item.imageSrc ||
                                                                "/path/to/default/image.jpg"
                                                            }
                                                            alt={
                                                                item.name ||
                                                                "product category image"
                                                            }
                                                            className="object-cover object-center"
                                                        />
                                                    </div>
                                                    {item.href ? (
                                                        <Link
                                                            href={item.href}
                                                            className="mt-2 block font-medium text-gray-900"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ) : (
                                                        <span className="mt-2 block font-medium text-gray-900">
                                                            {item.name}
                                                        </span>
                                                    )}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <SheetFooter className="mt-6 border-t border-gray-200 pt-6">
                        {/* <Link
                            href="/sign-in"
                            className="block p-2 font-medium text-gray-900"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/sign-up"
                            className="block p-2 font-medium text-gray-900"
                        >
                            Sign up 😊
                        </Link> */}
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileNav;
