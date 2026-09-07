import { createContext, useContext } from 'react';

export const accentOptions = [
    { name: 'Ocean Blue', value: '#2563EB' },
    { name: 'Royal Violet', value: '#7C3AED' },
    { name: 'Emerald', value: '#059669' },
    { name: 'Rose', value: '#E11D48' },
    { name: 'Amber', value: '#D97706' },
] as const;

type ThemePreference = {
    accent: string;
    setAccent: (accent: string) => void;
};

export const ThemePreferenceContext = createContext<ThemePreference | null>(null);

export const useThemePreference = () => {
    const preference = useContext(ThemePreferenceContext);
    if (!preference) throw new Error('ThemePreferenceContext is missing');
    return preference;
};
