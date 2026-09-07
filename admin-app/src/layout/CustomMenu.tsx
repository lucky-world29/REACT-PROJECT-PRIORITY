import type { ReactNode } from 'react';

import {
    Box,
    Divider,
    Tooltip,
    Typography,
} from '@mui/material';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';

import {
    Menu,
    MenuItemLink,
    useSidebarState,
} from 'react-admin';


/* ============================================================
   SECTION
============================================================ */

const Section = ({
    children,
    open,
}: {
    children: ReactNode;
    open: boolean;
}) => {
    if (!open) {
        return null;
    }

    return (
        <Typography
            sx={{
                px: 2.2,

                pt: 2.2,
                pb: 0.8,

                fontSize: 10,
                fontWeight: 700,

                letterSpacing: '0.11em',

                color: '#64748B',

                whiteSpace: 'nowrap',
            }}
        >
            {children}
        </Typography>
    );
};


/* ============================================================
   MENU ITEM STYLE
============================================================ */

const itemSx = {
    mx: 1,

    mb: 0.4,

    minHeight: 42,

    px: 1.3,

    borderRadius: '8px',

    color: '#94A3B8',

    transition:
        'background-color 150ms ease, color 150ms ease',

    '& .MuiListItemIcon-root': {
        minWidth: 38,

        color: '#64748B',

        transition: 'color 150ms ease',
    },

    '& .MuiTypography-root': {
        fontSize: 13,

        fontWeight: 500,

        whiteSpace: 'nowrap',
    },

    '&:hover': {
        backgroundColor: '#141F33',

        color: '#FFFFFF',

        '& .MuiListItemIcon-root': {
            color: '#CBD5E1',
        },
    },

    '&.RaMenuItemLink-active': {
        backgroundColor: 'primary.main',

        color: '#FFFFFF',

        '& .MuiListItemIcon-root': {
            color: '#FFFFFF',
        },

        '& .MuiTypography-root': {
            fontWeight: 600,
        },
    },
};


/* ============================================================
   CUSTOM MENU
============================================================ */

const CustomMenu = () => {
    const [open] = useSidebarState();

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                position: 'sticky',
                top: 0,

                display: 'flex',
                flexDirection: 'column',

                backgroundColor: '#0B1220',
                overflow: 'hidden',
            }}

        >

            {/* ==================================================
                BRAND HEADER
            ================================================== */}

            <Box
                sx={{
                    height: 76,

                    flexShrink: 0,

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: open
                        ? 'flex-start'
                        : 'center',

                    px: open ? 2 : 0,
                }}
            >

                {/* LOGO */}

                <Box
                    sx={{
                        width: 38,

                        height: 38,

                        flexShrink: 0,

                        borderRadius: '9px',

                        backgroundColor: 'primary.main',

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent:
                            'center',

                        boxShadow:
                            '0 4px 14px rgba(37, 99, 235, 0.22)',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 18,

                            fontWeight: 800,

                            color: '#FFFFFF',

                            lineHeight: 1,
                        }}
                    >
                        P
                    </Typography>
                </Box>


                {/* BRAND TEXT */}

                {open && (
                    <Box
                        sx={{
                            ml: 1.4,

                            minWidth: 0,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 15,

                                fontWeight: 800,

                                letterSpacing:
                                    '0.04em',

                                color: '#FFFFFF',

                                lineHeight: 1,
                            }}
                        >
                            PRIORITY
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.6,

                                fontSize: 9,

                                fontWeight: 600,

                                letterSpacing:
                                    '0.12em',

                                color: '#64748B',

                                lineHeight: 1,
                            }}
                        >
                            WORKFORCE ADMIN
                        </Typography>
                    </Box>
                )}

            </Box>


            {/* ==================================================
                DIVIDER
            ================================================== */}

            <Divider
                sx={{
                    borderColor: '#1E293B',

                    flexShrink: 0,
                }}
            />


            {/* ==================================================
                NAVIGATION
            ================================================== */}

            <Menu
                sx={{
                    flex: 1,

                    minHeight: 0,

                    width: '100%',

                    overflowY: 'auto',

                    overflowX: 'hidden',

                    py: 1,


                    /* LIST */

                    '& .MuiList-root': {
                        paddingTop: 0,

                        paddingBottom: 1,
                    },


                    /* COLLAPSED ITEMS */

                    '&.RaMenu-closed .MuiListItemButton-root': {
                        width: 52,

                        minWidth: 52,

                        minHeight: 42,

                        marginLeft: 'auto',

                        marginRight: 'auto',

                        paddingLeft: 0,

                        paddingRight: 0,

                        justifyContent:
                            'center',
                    },


                    /* COLLAPSED ICON */

                    '&.RaMenu-closed .MuiListItemIcon-root': {
                        minWidth: 0,

                        margin: 0,

                        justifyContent:
                            'center',
                    },


                    /* HIDE TEXT */

                    '&.RaMenu-closed .MuiTypography-root': {
                        display: 'none',
                    },


                    /* SCROLLBAR */

                    '&::-webkit-scrollbar': {
                        width: 4,
                    },

                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor:
                            '#334155',

                        borderRadius: 10,
                    },

                    '&::-webkit-scrollbar-track': {
                        backgroundColor:
                            'transparent',
                    },

                    scrollbarWidth: 'thin',
                }}
            >

                {/* ==================================================
                    OVERVIEW
                ================================================== */}

                <Section open={open}>
                    OVERVIEW
                </Section>


                <Tooltip
                    title={!open ? 'Dashboard' : ''}
                    placement="right"
                    disableHoverListener={open}
                >
                    <MenuItemLink
                        to="/"
                        primaryText="Dashboard"
                        leftIcon={
                            <DashboardRoundedIcon />
                        }
                        sx={itemSx}
                    />
                </Tooltip>


                {/* ==================================================
                    WORKFORCE
                ================================================== */}

                <Section open={open}>
                    WORKFORCE
                </Section>


                <Tooltip
                    title={!open ? 'Employees' : ''}
                    placement="right"
                    disableHoverListener={open}
                >
                    <MenuItemLink
                        to="/employees"
                        primaryText="Employees"
                        leftIcon={
                            <PeopleAltRoundedIcon />
                        }
                        sx={itemSx}
                    />
                </Tooltip>

                <Tooltip title={!open ? 'Calendar & tasks' : ''} placement="right" disableHoverListener={open}>
                    <MenuItemLink to="/calendar" primaryText="Calendar & tasks" leftIcon={<CalendarMonthRoundedIcon />} sx={itemSx} />
                </Tooltip>

                <Section open={open}>INSIGHTS</Section>
                <Tooltip title={!open ? 'Analytics' : ''} placement="right" disableHoverListener={open}>
                    <MenuItemLink to="/analytics" primaryText="Analytics" leftIcon={<InsightsRoundedIcon />} sx={itemSx} />
                </Tooltip>

            </Menu>

        </Box>
    );
};

export default CustomMenu;
