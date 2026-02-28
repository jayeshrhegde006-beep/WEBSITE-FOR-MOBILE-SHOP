import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(pb.authStore.model);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check initial auth state
        setCurrentUser(pb.authStore.model);
        setLoading(false);

        // Listen for auth changes
        const unsubscribe = pb.authStore.onChange((token, model) => {
            setCurrentUser(model);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const login = async (email, password) => {
        return await pb.collection('users').authWithPassword(email, password);
    };

    const logout = () => {
        pb.authStore.clear();
    };

    const value = {
        currentUser,
        isAuthenticated: !!currentUser,
        login,
        logout,
        initialLoading: loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
