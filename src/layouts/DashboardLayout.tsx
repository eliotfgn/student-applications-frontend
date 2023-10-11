import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.tsx';

function DashboardLayout(): React.JSX.Element {
    return (
        <div className={'relative'}>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
