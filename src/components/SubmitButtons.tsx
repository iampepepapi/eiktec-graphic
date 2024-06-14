"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader, Loader2 } from "lucide-react";

export function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled className="w-fit">
                    <Loader className="mr-2 w-4 animate-spin" />
                    Please Wait
                </Button>
            ) : (
                <Button className="w-fit" type="submit">
                    Save Now
                </Button>
            )}
        </>
    );
}
