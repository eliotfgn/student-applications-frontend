import User from '../types/models/user';
import React, { createContext, useState } from 'react';

export interface Auth {
    user?: User;
    token?: string;
}

type AuthContextProviderProps = {
    children: React.ReactNode;
};

type AuthContextType = {
    auth: Auth;
    login: (user: User, token: string) => void;
    logout: () => void;
};

export const AuthContext: React.Context<AuthContextType | null> =
    createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: AuthContextProviderProps) {
    const [auth, setAuth] = useState<Auth>({});

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
