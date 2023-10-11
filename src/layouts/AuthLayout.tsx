import React from 'react';
import {Outlet} from "react-router-dom";

function AuthLayout(): React.JSX.Element{
    return (
        <div className={'flex flex-col justify-center items-center'}>
            <h1 className={'text-4xl text-emerald-600 font-bold text-center my-20'}>My Student Portal</h1>
            <Outlet/>
        </div>
    );
}

export default AuthLayout;