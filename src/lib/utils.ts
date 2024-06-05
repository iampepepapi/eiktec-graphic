import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(
    price: number | string,
    options: {
        currency?: "NOK" | "USD" | "EUR" | "GBP",
        notation?: Intl.NumberFormatOptions["notation"]
    } = {}
) {
    const { currency = 'NOK', notation = 'compact' } = options

    const numericPrice = typeof price === "string" ? parseFloat(price) : price

    return new Intl.NumberFormat("nb-NB", {
        style: "currency",
        currency,
        notation,
        maximumFractionDigits: 2,
    }).format(numericPrice)
}