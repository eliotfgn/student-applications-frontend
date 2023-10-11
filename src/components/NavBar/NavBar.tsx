import React from 'react';
import Document from '../icons/Document.tsx';
import Profile from '../icons/Profile.tsx';
import cn from '../../utils/cn.ts';
import { NavLink, useLocation } from 'react-router-dom';

interface NavItem {
    label: string;
    icon: React.JSX.Element;
    link: string;
}

function NavBar(): React.JSX.Element {
    const { pathname }: { pathname: string } = useLocation();

    const items: NavItem[] = [
        {
            label: 'Applications',
            icon: (
                <Document
                    className={`${
                        pathname === '/applications' ? 'fill-emerald-600' : 'fill-white'
                    }`}
                />
            ),
            link: '/applications',
        },
        {
            label: 'Profile',
            icon: (
                <Profile
                    className={`${pathname === '/profile' ? 'fill-emerald-600' : 'fill-white'}`}
                />
            ),
            link: '/profile',
        },
    ];

    return (
        <div className={'h-screen w-80 bg-emerald-600 py-10'}>
            <h1 className={'text-center text-2xl font-bold text-white'}>Dashboard</h1>

            <div className={'my-10 h-full w-full'}>
                <div className={'flex flex-col gap-5'}>
                    {items.map((item: NavItem, index: number) => (
                        <NavLink
                            to={item.link}
                            key={index}
                            className={({ isActive }) =>
                                cn(
                                    'flex items-center gap-5 px-5 py-3',
                                    `${
                                        !isActive
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-white text-emerald-600'
                                    }`,
                                )
                            }
                        >
                            {item.icon}
                            <h3 className={'text-lg font-medium'}>{item.label}</h3>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
