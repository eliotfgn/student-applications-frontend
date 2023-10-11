import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.tsx';

function DashboardLayout(): React.JSX.Element {
    return (
        <div className={'relative w-screen flex overflow-x-hidden'}>
            <div className={'h-screen sticky top-0 w-80'}><NavBar /></div>
            <section className={'w-full px-10 py-14'}>
                <Outlet />
            </section>
        </div>
    );
}

export default DashboardLayout;
