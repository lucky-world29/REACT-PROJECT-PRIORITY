import { alpha, createTheme, darken, lighten } from '@mui/material/styles';

const priorityTheme = (accent = '#2563EB') => createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: accent,
            light: lighten(accent, 0.88),
            dark: darken(accent, 0.22),
            contrastText: '#FFFFFF',
        },

        secondary: {
            main: '#64748B',
        },

        background: {
            default: '#F6F8FC',
            paper: '#FFFFFF',
        },

        text: {
            primary: '#0F172A',
            secondary: '#64748B',
        },

        divider: '#E2E8F0',

        success: {
            main: '#16A34A',
        },

        warning: {
            main: '#D97706',
        },

        error: {
            main: '#DC2626',
        },
    },

    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),

        h1: {
            fontWeight: 700,
            letterSpacing: '-0.025em',
        },

        h2: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },

        h3: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },

        h4: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },

        h5: {
            fontWeight: 600,
        },

        h6: {
            fontWeight: 600,
        },

        button: {
            fontWeight: 600,
            textTransform: 'none',
        },
    },

    shape: {
        borderRadius: 10,
    },

    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid',
                    borderColor: alpha(accent, 0.16),
                    boxShadow:
                        '0 1px 3px rgba(15, 23, 42, 0.04)',
                    borderRadius: 12,
                    minWidth: 0,
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    minHeight: 40,
                    paddingLeft: 16,
                    paddingRight: 16,
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                size: 'small',
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    minWidth: 0,
                },
            },
        },
    },
});

export default priorityTheme;
