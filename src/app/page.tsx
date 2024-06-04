import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";

const perks = [
    {
        name: "Instant Delivery",
        Icon: ArrowDownToLine,
        description:
            "Get your graphics and websites delivered instantly upon completion, ensuring you meet your deadlines without any delays.",
    },
    {
        name: "Guaranteed Quality",
        Icon: CheckCircle,
        description:
            "Our graphics and websites are meticulously crafted and quality-checked to ensure you receive only the best, professional-grade designs.",
    },
    {
        name: "Guaranteed Quality",
        Icon: CheckCircle,
        description:
            "Our graphics and websites are meticulously crafted and quality-checked to ensure you receive only the best, professional-grade designs.",
    },
];

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        We bring your{" "}
                        <span className="text-primary">ideas to life</span>
                    </h1>

                    <p className="mt-6 max-w-prose text-lg text-muted-foreground">
                        Welcome to Eiktec Graphics.
                    </p>
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="#"
                            className={`${buttonVariants()} gap-x-2 hover:bg-muted-foreground`}
                        >
                            <p>Contact</p>
                            <Mail size={15} />
                        </Link>
                        <Button variant="ghost">Read More &darr;</Button>
                    </div>
                </div>
                {/* TODO: Procduct showcase */}
            </MaxWidthWrapper>
            <section className="border-t border-gray-200 bg-gray-50">
                <MaxWidthWrapper className="py-20">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                        {perks.map((perk) => (
                            <div
                                key={perk.name}
                                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                            >
                                <div className="flex justify-center md:flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                                        {
                                            <perk.Icon className="h-1/3 w-1/3 text-white" />
                                        }
                                    </div>
                                </div>
                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-base font-medium text-primary">
                                        {perk.name}
                                    </h3>
                                    <p className="mt-3 px-2 text-sm text-muted-foreground">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
            <Footer />
        </>
    );
}
