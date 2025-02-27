"use client";

import * as React from 'react';
import { usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import DrawIcon from '@mui/icons-material/Draw';
import ArticleIcon from '@mui/icons-material/Article';

export default function Nav() {
    const [value, setValue] = React.useState(0);
    const pathname = usePathname();

    const handlePath = () => {
        if (pathname == '/') {
            setValue(0);
        } else if (pathname == '/canvas') {
            setValue(1);
        } else if (pathname == '/write') {
            setValue(2);
        }
    };

    React.useEffect(() => {
        handlePath();
    }, []);

    return (
        <Box className="fixed bottom-0 w-full">
            <BottomNavigation
                showLabels
                value={value}
                onChange={handlePath}
            >
                <BottomNavigationAction label="หน้าหลัก" href='/' icon={<HomeIcon />} />
                <BottomNavigationAction label="วาด" href='/canvas' icon={<DrawIcon />} />
                <BottomNavigationAction label="ข้อความ" href='/write' icon={<ArticleIcon />} />
            </BottomNavigation>
        </Box>
    );
}