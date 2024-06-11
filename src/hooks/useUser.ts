"use client"

import { useState, useEffect } from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const useUser = () => {
    const [user, setUser] = useState<any | null>(null); // Add appropriate type for user
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { getUser, isAuthenticated } = getKindeServerSession();
                const user = await getUser();
                const authenticated = await isAuthenticated();
                setUser(user);
                setAuthenticated(authenticated);
            } catch (error) {
                console.error("Failed to fetch user", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, authenticated, loading };
};

export default useUser;
