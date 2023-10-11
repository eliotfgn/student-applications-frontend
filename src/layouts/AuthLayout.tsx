import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout(): React.JSX.Element {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <h1 className={'mt-20 text-center text-4xl font-bold text-emerald-600'}>
                My Student Portal
            </h1>
            <Outlet />
        </div>
    );
}

export default AuthLayout;
