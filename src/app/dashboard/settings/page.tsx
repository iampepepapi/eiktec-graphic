/* eslint-disable react/no-unescaped-entities */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/SubmitButtons";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
    noStore();
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            name: true,
            email: true,
        },
    });

    return data;
}

export default async function SettingsPage() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await getData(user?.id as string);

    async function postData(formData: FormData) {
        "use server";

        const name = formData.get("name") as string;

        await prisma.user.update({
            where: {
                id: user?.id,
            },
            data: {
                name: name ?? undefined,
            },
        });

        revalidatePath("/", "layout");
    }

    return (
        <div className="grid items-start gap-8">
            <div className="flex items-center justify-between px-2">
                <div className="grid gap-1">
                    <h1 className="text-2xl md:text-3xl">Settings</h1>
                    <p className="text-lg text-muted-foreground">
                        Your Profile Settings
                    </p>
                </div>
            </div>
            <Card>
                <form action={postData}>
                    <CardHeader>
                        <CardTitle>General Data</CardTitle>
                        <CardDescription>
                            Please provide general data about yourself. Don't
                            forget to save!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <Label>Your Name</Label>
                                <Input
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    defaultValue={data?.name ?? undefined}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label>Your Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    disabled
                                    defaultValue={data?.email as string}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label></Label>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <SubmitButton />
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
