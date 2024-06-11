"use client";

import React from "react";
import useUser from "../hooks/useUser";
import { DropdownMenuLabel } from "./ui/dropdown-menu";

const UserDropdownMenuLabel = () => {
    const { user, authenticated, loading } = useUser();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!authenticated) {
        return <p>Please sign in or register!</p>;
    }

    return (
        <DropdownMenuLabel className="">
            <div className="flex flex-col space-y-1.5">
                <p className="text-sm font-medium leading-none">
                    {user.given_name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                </p>
            </div>
        </DropdownMenuLabel>
    );
};

export default UserDropdownMenuLabel;
