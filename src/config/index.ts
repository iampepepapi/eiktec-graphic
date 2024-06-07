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

export const PRODUCT_CATEGORIES: Category[] = [

    {
        isChevron: false,
        label: "Services",
        value: "home",
        style: "compact",
        href: "/services",
    },
    {
        isChevron: false,
        label: "About Us",
        value: "about_us",
        style: "compact",
        href: "/about-us",
    },
    {
        isChevron: false,
        label: "Contact",
        value: "contact",
        style: "compact",
        href: "/contact",
    },
    {
        isChevron: true,
        label: "UI Kits",
        value: "ui_kits",
        style: "normal",
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "static/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "static/nav/ui-kits/blue.jpg",
            },
            {
                name: "Bestseller",
                href: "#",
                imageSrc: "static/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        isChevron: true,
        label: "Shop",
        value: "shop",
        style: "normal",
        featured: [
            {
                name: "Favorite Icon Picks",
                href: "#",
                imageSrc: "static/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "static/nav/icons/new.jpg",
            },
            {
                name: "Bestselling Icons",
                href: "#",
                imageSrc: "static/nav/icons/bestsellers.jpg",
            },
        ],
    },
    {
        isChevron: false,
        label: "More",
        value: "links",
        style: "compact",
        featured: [
            {
                name: "Products",
                imageSrc: "static/nav/icons/bestsellers.jpg",
                href: "/products",
            },
            {
                name: "Corporate Templates",
                href: "#",
            },
            {
                name: "E-commerce Templates",
                href: "#",
            },
        ],
    },

];
