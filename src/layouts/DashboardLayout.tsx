import React from 'react';
import {Outlet} from "react-router-dom";

function DashboardLayout(): React.JSX.Element {
    return (
        <div className={''}>
            <div><Outlet/></div>
        </div>
    );
}

export default DashboardLayout;