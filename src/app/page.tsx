import ContactUs from "@/components/ContactUs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Plans from "@/components/Plans";
import { Button, buttonVariants } from "@/components/ui/button";
import { perks } from "@/config";
import { Mail } from "lucide-react";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const { isAuthenticated } = getKindeServerSession();

    if (await isAuthenticated()) {
        return redirect("/dashboard");
    }
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
            <section className="border-t border-border bg-secondary">
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
            <section className="border-t border-gray-200">
                <MaxWidthWrapper className="py-20">
                    <div>
                        <Plans />
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="border-t border-gray-200">
                <MaxWidthWrapper className="py-20">
                    <div>
                        <ContactUs />
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
