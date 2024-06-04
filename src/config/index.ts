export type FeaturedItem = {
    name: string;
    href: string;
    imageSrc?: string;
};

export type CategoryStyle = "normal" | "compact";

export type Category = {
    label: string;
    value: string;
    style: CategoryStyle;
    featured: FeaturedItem[];
};

export const PRODUCT_CATEGORIES: Category[] = [
    {
        label: "UI Kits",
        value: "ui_kits",
        style: "normal",
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Bestseller",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        label: "Icons",
        value: "icons",
        style: "normal",
        featured: [
            {
                name: "Favorite Icon Picks",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Bestselling Icons",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
    {
        label: "Links",
        value: "links",
        style: "compact",
        featured: [
            {
                name: "Business Templates",
                imageSrc: "/nav/icons/bestsellers.jpg",
                href: "#",
            },
            {
                name: "Corporate Templates",
                href: "#",
            },
            {
                name: "E-commerce Templates",
                href: "#",
            },
            {
                name: "Portfolio Templates",
                href: "#",
                imageSrc: "/nav/icons / bestsellers.jpg",
            },
            {
                name: "Blog Templates",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
];
