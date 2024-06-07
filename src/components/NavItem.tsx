"use client";

import React from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Type definitions
export type FeaturedItem = {
    name?: string;
    href?: string;
    imageSrc?: string;
};

export type CategoryStyle = "normal" | "compact";

export type Category = {
    label: string;
    value: string;
    style: CategoryStyle;
    featured?: FeaturedItem[];
    href?: string;
    isChevron: boolean;
};

interface NavItemProps {
    category: Category;
    handleOpen: () => void;
    isOpen: boolean;
    isAnyOpen: boolean;
    isChevron: boolean;
}

const NavItem = ({
    isAnyOpen,
    category,
    handleOpen,
    isOpen,
    isChevron,
}: NavItemProps) => {
    return (
        <div className="flex">
            <div className="relative flex items-center">
                {category.href ? (
                    <Link href={category.href}>
                        <Button className="gap-1.5" variant="ghost">
                            {category.label}
                        </Button>
                    </Link>
                ) : (
                    <Button
                        className="gap-1.5"
                        onClick={handleOpen}
                        variant={isOpen ? "secondary" : "ghost"}
                    >
                        {category.label}
                        {isChevron && (
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 text-muted-foreground transition-all",
                                    {
                                        "-rotate-180": isOpen,
                                    },
                                )}
                            />
                        )}
                    </Button>
                )}
            </div>
            {isOpen && category.featured && (
                <div
                    className={cn(
                        "absolute inset-x-0 top-full text-sm text-muted-foreground",
                        {
                            "animate-in fade-in-10 slide-in-from-top-5":
                                !isAnyOpen,
                        },
                    )}
                >
                    <div
                        className="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                    />
                    <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8 gap-y-4">
                                    {category.featured.map((item) => (
                                        <div
                                            key={item.name}
                                            className={cn(
                                                "group relative text-base sm:text-sm",
                                                {
                                                    "flex flex-row items-center":
                                                        category.style ===
                                                        "compact",
                                                },
                                            )}
                                        >
                                            {item.imageSrc && (
                                                <div
                                                    className={cn({
                                                        "relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75":
                                                            category.style ===
                                                            "normal",
                                                        "relative h-16 w-16 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75":
                                                            category.style ===
                                                            "compact",
                                                    })}
                                                >
                                                    <Image
                                                        unoptimized={true}
                                                        src={item.imageSrc}
                                                        alt={item.name || ""}
                                                        fill
                                                        className="object-fit border object-cover object-center"
                                                    />
                                                </div>
                                            )}
                                            <div
                                                className={
                                                    category.style === "compact"
                                                        ? "ml-4"
                                                        : "mt-6"
                                                }
                                            >
                                                {item.href ? (
                                                    <Link
                                                        href={item.href}
                                                        className="block font-medium text-gray-900"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ) : (
                                                    <span className="block font-medium text-gray-900">
                                                        {item.name}
                                                    </span>
                                                )}
                                                <p>Shop now</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavItem;
