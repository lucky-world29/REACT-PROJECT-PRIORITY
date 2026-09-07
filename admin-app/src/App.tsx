import { useEffect, useMemo, useState } from 'react';
import { alpha, darken, lighten } from '@mui/material/styles';
import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from 'react-router-dom';

import dataProviderFactory from './dataProvider';
import Dashboard from './dashboard/Dashboard';
import EmployeeList from './employees/EmployeeList';
import AdminLayout from './layout/AdminLayout';
import priorityTheme from './themes/priorityTheme';
import { ThemePreferenceContext } from './themes/ThemePreferenceContext';
import CalendarTasks from './workspace/CalendarTasks';
import Analytics from './workspace/Analytics';

const App = () => {
    const [accent, setAccentState] = useState(
        () => localStorage.getItem('priority-accent') || '#2563EB',
    );
    const setAccent = (nextAccent: string) => {
        localStorage.setItem('priority-accent', nextAccent);
        setAccentState(nextAccent);
    };
    useEffect(() => {
        document.documentElement.style.setProperty('--priority-accent', accent);
        document.documentElement.style.setProperty('--priority-accent-soft', lighten(accent, 0.9));
        document.documentElement.style.setProperty('--priority-accent-muted', alpha(accent, 0.13));
        document.documentElement.style.setProperty('--priority-accent-dark', darken(accent, 0.2));
    }, [accent]);
    const theme = useMemo(() => priorityTheme(accent), [accent]);

    return (
        <ThemePreferenceContext.Provider value={{ accent, setAccent }}>
        <Admin
            title="Priority Admin"
            dashboard={Dashboard}
            theme={theme}
            layout={AdminLayout}
            dataProvider={dataProviderFactory()}
        >
            <Resource
                name="employees"
                list={EmployeeList}
                options={{
                    label: 'Employees',
                }}
            />
            <CustomRoutes>
                <Route path="/calendar" element={<CalendarTasks />} />
                <Route path="/analytics" element={<Analytics />} />
            </CustomRoutes>
        </Admin>
        </ThemePreferenceContext.Provider>
    );
};

export default App;
