// Plans.tsx
import React from "react";
import { plans } from "@/config/perks";
import { Button } from "./ui/button"; // Assuming you have a button component from shadcn
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"; // Assuming you have card components from shadcn
import { formatPrice } from "@/lib/utils";

const Plans = () => {
    return (
        <div className="plans container mx-auto p-4">
            <h1 className="mb-8 w-full text-center text-4xl font-bold tracking-normal text-primary md:tracking-wider">
                Our Plans
            </h1>

            <div className="flex w-full flex-col items-center justify-center sm:gap-4 md:flex-row md:items-stretch md:gap-4">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        className="relative w-96 border border-gray-200 md:w-80"
                    >
                        <CardHeader className="flex flex-col items-center">
                            <CardTitle className="mb-4 text-2xl font-bold">
                                {plan.name}
                            </CardTitle>
                            <p className="mb-4 text-xl font-semibold">
                                {plan.price}
                            </p>
                            <Button
                                className="mb-4 w-full md:mt-0"
                                variant="default"
                            >
                                Choose Plan
                            </Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="list-disc pl-5">
                                {plan.perks.map((perk, i) => (
                                    <li key={i} className="mb-2 text-gray-700">
                                        {perk}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Plans;
