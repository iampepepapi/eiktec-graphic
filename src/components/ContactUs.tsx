"use client";

import React, { useState } from "react";
import { Button } from "./ui/button"; // Assuming you have a button component from shadcn
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "./ui/card"; // Assuming you have card components from shadcn
import { Input } from "./ui/input"; // Assuming you have an input component from shadcn
import { Textarea } from "./ui/textarea"; // Assuming you have a textarea component from shadcn
import Image from "next/image";
import Favico from "../../public/favico.png";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted", formData);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="mb-8 text-center text-3xl font-bold text-primary">
                Contact Us
            </h1>
            <div className="flex justify-center">
                <Card className="flex w-full border border-gray-200 px-4">
                    <div className="w-full md:w-1/2">
                        <CardHeader className="gap-y-1.5">
                            <CardTitle className="mb-4 text-2xl font-bold">
                                Get in Touch
                            </CardTitle>
                        </CardHeader>
                        <form
                            onSubmit={handleSubmit}
                            className="text-primary md:tracking-wider"
                        >
                            <CardContent className="plans space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="mt-1 w-full"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="w-full"
                                >
                                    Send Message
                                </Button>
                            </CardFooter>
                        </form>
                    </div>
                    <div className="relative flex md:flex-1">
                        <Image
                            unoptimized={true}
                            src={Favico}
                            className="object-contain"
                            fill
                            alt="image"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ContactUs;
