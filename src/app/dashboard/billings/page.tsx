import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import React from "react";

const featureItems = [
    { name: "lorem ipsum dolor " },
    { name: "lorem ipsum dolor" },
    { name: "lorem ipsum dolor" },
    { name: "lorem ipsum dolor" },
    { name: "lorem ipsum dolor" },
];

export default function BillingPage() {
    return (
        <div className="mx-auto max-w-md space-y-4">
            <Card className="flex flex-col">
                <CardContent className="py-8">
                    <div>
                        <h3 className="inline-flex rounded-full bg-primary/10 px-4 text-sm font-semibold uppercase tracking-wide text-primary">
                            Monthly
                        </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                        10.000{" "}
                        <span className="ml-1 text-2xl text-muted-foreground">
                            /mo
                        </span>
                    </div>
                    <p className="mt-5 text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio non consectetur provident quasi. Autem eos
                        reiciendis vero accusantium.
                    </p>
                </CardContent>
                <div className="m-1 flex flex-1 flex-col justify-between space-y-6 rounded-lg bg-secondary px-6 pb-8 pt-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                        {featureItems.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="size-6 text-green-500" />
                                </div>
                                <p className="ml-3 text-base">{item.name}</p>
                            </li>
                        ))}
                    </ul>
                    <form className="w-full">
                        <Button className="w-full">Buy Today</Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
