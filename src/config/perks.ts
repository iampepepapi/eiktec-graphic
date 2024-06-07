// perks.ts
import { formatPrice } from "@/lib/utils";

export type Plan = {
    name: string;
    price: string;
    perks: string[];
};

export const plans: Plan[] = [
    {
        name: "Basic",
        price: `${formatPrice(1299)}`,
        perks: [
            "Responsive Website Design",
            "Basic SEO Optimization",
            "Email Support",
            "5GB Cloud Storage"
        ],
    },
    {
        name: "Pro",
        price: `${formatPrice(2599)}`,
        perks: [
            "Advanced Website Design",
            "Enhanced SEO Optimization",
            "Priority Email Support",
            "50GB Cloud Storage",
            "Monthly Performance Reports"
        ],
    },
    {
        name: "Enterprise",
        price: "Contact us",
        perks: [
            "Custom Website Design",
            "Complete SEO and Marketing Suite",
            "24/7 Dedicated Support",
            "Unlimited Cloud Storage",
            "Dedicated Account Manager",
            "Custom Integrations and Features"
        ],
    },
];
