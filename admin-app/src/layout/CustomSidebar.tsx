import { Sidebar, type SidebarProps, useSidebarState } from 'react-admin';

import {
    Box,
    IconButton,
    Tooltip,
} from '@mui/material';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const SIDEBAR_OPEN_WIDTH = 260;
const SIDEBAR_CLOSED_WIDTH = 76;

const CustomSidebar = (props: SidebarProps) => {
    const [open, setOpen] = useSidebarState();

    const sidebarWidth = open
        ? SIDEBAR_OPEN_WIDTH
        : SIDEBAR_CLOSED_WIDTH;

    return (
        <>
            <Sidebar
                {...props}
                sx={{
                    /* CONTROL THE ACTUAL DRAWER */
                    '& .RaSidebar-drawer': {
                        width: `${sidebarWidth}px !important`,
                        maxWidth: `${sidebarWidth}px !important`,
                        minWidth: `${sidebarWidth}px !important`,
                        transition: 'width 220ms ease',
                        overflow: 'visible',
                    },

                    /* CONTROL THE DRAWER PAPER */
                    '& .RaSidebar-drawerPaper': {
                        width: `${sidebarWidth}px !important`,
                        maxWidth: `${sidebarWidth}px !important`,
                        minWidth: `${sidebarWidth}px !important`,

                        height: '100vh',
                        top: 0,
                        left: 0,

                        backgroundColor: '#0B1220',
                        borderRight: '1px solid #1E293B',
                        boxShadow: 'none',

                        overflow: 'hidden',

                        display: 'flex',
                        flexDirection: 'column',

                        transition: 'width 220ms ease',
                    },

                    /* OPEN STATE */
                    '&.RaSidebar-open .RaSidebar-drawer': {
                        width: `${SIDEBAR_OPEN_WIDTH}px !important`,
                    },

                    '&.RaSidebar-open .RaSidebar-drawerPaper': {
                        width: `${SIDEBAR_OPEN_WIDTH}px !important`,
                    },

                    /* CLOSED STATE */
                    '&.RaSidebar-closed .RaSidebar-drawer': {
                        width: `${SIDEBAR_CLOSED_WIDTH}px !important`,
                    },

                    '&.RaSidebar-closed .RaSidebar-drawerPaper': {
                        width: `${SIDEBAR_CLOSED_WIDTH}px !important`,
                    },

                    '& .RaSidebar-content': {
                        height: '100%',
                        minHeight: 0,
                        padding: 0,
                        overflow: 'hidden',
                    },
                }}
            />

            {/* PERMANENT SIDEBAR TOGGLE */}
            <Tooltip
                title={open ? 'Collapse sidebar' : 'Expand sidebar'}
                placement="right"
            >
                <Box
                    sx={{
                        position: 'fixed',

                        top: 19,

                        left: open
                            ? SIDEBAR_OPEN_WIDTH - 50
                            : 19,

                        width: 38,
                        height: 38,

                        zIndex: theme =>
                            theme.zIndex.drawer + 20,

                        transition: 'left 220ms ease',

                        pointerEvents: 'auto',
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(!open)}
                        aria-label={
                            open
                                ? 'Collapse sidebar'
                                : 'Expand sidebar'
                        }
                        sx={{
                            width: 38,
                            height: 38,

                            color: '#94A3B8',

                            backgroundColor: 'transparent',

                            '&:hover': {
                                backgroundColor: '#141F33',
                                color: '#FFFFFF',
                            },
                        }}
                    >
                        <MenuRoundedIcon
                            sx={{ fontSize: 22 }}
                        />
                    </IconButton>
                </Box>
            </Tooltip>
        </>
    );
};

export default CustomSidebar;
