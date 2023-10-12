import User from '../types/models/user';
import React, { createContext, useEffect, useState } from 'react';

export interface Auth {
    user?: User;
    token?: string;
}

type AuthContextProviderProps = {
    children: React.ReactNode;
};

export type AuthContextType = {
    auth: Auth;
    login: (user: User, token: string) => void;
    logout: () => void;
};

export const AuthContext: React.Context<AuthContextType | undefined> = createContext<
    AuthContextType | undefined
>(undefined);

export default function AuthProvider({ children }: AuthContextProviderProps) {
    const [auth, setAuth] = useState<Auth>({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = JSON.parse(localStorage.getItem('user')!);
            setAuth((prevAuth) => {
                prevAuth.token = token;
                prevAuth.user = user;
                return prevAuth;
            });
        }
    }, []);

    const login = (user: User, token: string) => {
        setAuth({
            user: user,
            token: token,
        });
    };

    const logout = () => {
        setAuth({});
    };

    return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
}
