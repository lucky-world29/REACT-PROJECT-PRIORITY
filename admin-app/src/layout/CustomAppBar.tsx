import { useState } from 'react';
import { AppBar, TitlePortal, useRedirect, useSidebarState } from 'react-admin';

import {
    Avatar,
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';

import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { accentOptions, useThemePreference } from '../themes/ThemePreferenceContext';

const SIDEBAR_OPEN_WIDTH = 260;
const SIDEBAR_CLOSED_WIDTH = 76;

const CustomAppBar = () => {
    const [sidebarOpen] = useSidebarState();
    const redirect = useRedirect();
    const { accent, setAccent } = useThemePreference();
    const [themeAnchor, setThemeAnchor] = useState<HTMLElement | null>(null);

    const sidebarWidth = sidebarOpen
        ? SIDEBAR_OPEN_WIDTH
        : SIDEBAR_CLOSED_WIDTH;

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <AppBar
            color="inherit"
            elevation={0}
            sx={{
                position: 'fixed',

                top: 0,

                left: {
                    xs: 0,
                    md: `${sidebarWidth}px`,
                },

                width: {
                    xs: '100%',
                    md: `calc(100% - ${sidebarWidth}px)`,
                },

                height: 64,
                minHeight: 64,

                backgroundColor: 'background.paper',

                borderBottom:
                    '1px solid #E2E8F0',

                zIndex: theme =>
                    theme.zIndex.drawer + 10,

                transition:
                    'left 220ms ease, width 220ms ease',

                '& .RaAppBar-toolbar': {
                    minHeight: 64,
                    height: 64,

                    width: '100%',

                    px: {
                        xs: 1.5,
                        sm: 2,
                        md: 3,
                    },

                    gap: 1,
                },

                /* Remove React Admin default burger */
                '& .RaAppBar-menuButton': {
                    display: 'none !important',
                },

                '& .RaAppBar-title': {
                    color: '#0F172A',
                },
            }}
        >
            {/* PAGE TITLE */}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',

                    minWidth: 0,
                    flexShrink: 1,

                    overflow: 'hidden',
                }}
            >
                <TitlePortal />

                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                        },

                        ml: 1.5,
                        pl: 1.5,

                        borderLeft:
                            '1px solid #E2E8F0',

                        minWidth: 0,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 12,
                            color: '#64748B',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Workforce Management
                    </Typography>
                </Box>
            </Box>

            {/* RIGHT SIDE */}

            <Box
                sx={{
                    ml: 'auto',

                    display: 'flex',
                    alignItems: 'center',

                    gap: {
                        xs: 0.2,
                        sm: 0.5,
                        md: 0.8,
                    },

                    flexShrink: 0,
                }}
            >
                {/* SEARCH */}

                <Tooltip title="Search">
                    <IconButton
                        onClick={() => redirect('/employees')}
                        sx={{
                            width: 38,
                            height: 38,
                            color: '#64748B',

                            '&:hover': {
                                backgroundColor:
                                    '#F1F5F9',
                            },
                        }}
                    >
                        <SearchRoundedIcon
                            sx={{
                                fontSize: 20,
                            }}
                        />
                    </IconButton>
                </Tooltip>

                {/* NOTIFICATIONS */}

                <Tooltip title="Notifications">
                    <IconButton
                        onClick={() => window.alert('You are all caught up. No new notifications.')}
                        sx={{
                            width: 38,
                            height: 38,
                            color: '#64748B',

                            '&:hover': {
                                backgroundColor:
                                    '#F1F5F9',
                            },
                        }}
                    >
                        <NotificationsNoneRoundedIcon
                            sx={{
                                fontSize: 21,
                            }}
                        />
                    </IconButton>
                </Tooltip>

                {/* DARK MODE */}

                <Tooltip title="Theme">
                    <IconButton
                        onClick={event => setThemeAnchor(event.currentTarget)}
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'inline-flex',
                            },

                            width: 38,
                            height: 38,

                            color: '#64748B',

                            '&:hover': {
                                backgroundColor:
                                    '#F1F5F9',
                            },
                        }}
                    >
                        <PaletteRoundedIcon
                            sx={{
                                fontSize: 20,
                            }}
                        />
                    </IconButton>
                </Tooltip>

                <Menu anchorEl={themeAnchor} open={Boolean(themeAnchor)} onClose={() => setThemeAnchor(null)}>
                    <MenuItem disabled>Choose accent color</MenuItem>
                    {accentOptions.map(option => (
                        <MenuItem key={option.value} selected={accent === option.value} onClick={() => { setAccent(option.value); setThemeAnchor(null); }}>
                            <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: option.value, mr: 1.25 }} />
                            {option.name}
                        </MenuItem>
                    ))}
                    <MenuItem disableRipple sx={{ cursor: 'default', borderTop: '1px solid', borderColor: 'divider', mt: 0.5, pt: 1.25 }}>
                        <Box component="label" sx={{ display: 'flex', width: '100%', alignItems: 'center', gap: 1.25, fontSize: 13 }}>
                            Custom color
                            <Box component="input" type="color" value={accent} onChange={event => setAccent(event.target.value)} sx={{ ml: 'auto', width: 30, height: 24, border: 0, bgcolor: 'transparent', cursor: 'pointer' }} />
                        </Box>
                    </MenuItem>
                </Menu>

                {/* RELOAD */}

                <Tooltip title="Reload">
                    <IconButton
                        onClick={handleReload}
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'inline-flex',
                            },

                            width: 38,
                            height: 38,

                            color: '#64748B',

                            '&:hover': {
                                backgroundColor:
                                    '#F1F5F9',
                            },
                        }}
                    >
                        <RefreshRoundedIcon
                            sx={{
                                fontSize: 20,
                            }}
                        />
                    </IconButton>
                </Tooltip>

                {/* SEPARATOR */}

                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                        },

                        height: 28,
                        my: 'auto',
                        mx: 0.5,
                    }}
                />

                {/* ADMIN */}

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',

                        gap: {
                            xs: 0,
                            sm: 0.8,
                        },

                        cursor: 'pointer',

                        px: 0.5,

                        borderRadius: '8px',

                        '&:hover': {
                            backgroundColor:
                                '#F8FAFC',
                        },
                    }}
                >
                    <Avatar
                        sx={{
                            width: 34,
                            height: 34,

                            backgroundColor:
                                'primary.main',

                            fontSize: 12,
                            fontWeight: 700,
                        }}
                    >
                        A
                    </Avatar>

                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 600,

                                color: '#0F172A',

                                lineHeight: 1.2,
                            }}
                        >
                            Admin
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.25,

                                fontSize: 10,

                                color: '#64748B',

                                lineHeight: 1.2,
                            }}
                        >
                            Administrator
                        </Typography>
                    </Box>

                    <KeyboardArrowDownRoundedIcon
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                            },

                            fontSize: 18,

                            color: '#94A3B8',
                        }}
                    />
                </Box>
            </Box>
        </AppBar>
    );
};

export default CustomAppBar;
