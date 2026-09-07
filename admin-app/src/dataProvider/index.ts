import fakeDataProvider from 'ra-data-fakerest';

const data = {
    employees: [
        {
            id: 1,
            employeeNumber: 'EMP001',
            firstName: 'Rahul',
            lastName: 'Kumar',
            workEmail: 'rahul.kumar@example.com',
            department: 'IT',
            designation: 'Software Engineer',
            worklocationCity: 'Bengaluru',
            role: 'Developer',
            employeeStatus: 'Active',
            enablePortal: 'Yes',
        },
        {
            id: 2,
            employeeNumber: 'EMP002',
            firstName: 'Priya',
            lastName: 'Sharma',
            workEmail: 'priya.sharma@example.com',
            department: 'Finance',
            designation: 'Financial Analyst',
            worklocationCity: 'Mumbai',
            role: 'Analyst',
            employeeStatus: 'Active',
            enablePortal: 'Yes',
        },
        {
            id: 3,
            employeeNumber: 'EMP003',
            firstName: 'Arjun',
            lastName: 'Rao',
            workEmail: 'arjun.rao@example.com',
            department: 'IT',
            designation: 'Senior Developer',
            worklocationCity: 'Hyderabad',
            role: 'Technical Lead',
            employeeStatus: 'Active',
            enablePortal: 'No',
        },
    ],

    projects: [
        {
            id: 1,
            projectCode: 'PRJ001',
            name: 'Website Redesign',
            description: 'Redesign the company website.',
            priority: 'critical',
            status: 'active',
        },
        {
            id: 2,
            projectCode: 'PRJ002',
            name: 'Mobile Application',
            description: 'Development of the company mobile application.',
            priority: 'high',
            status: 'active',
        },
        {
            id: 3,
            projectCode: 'PRJ003',
            name: 'HR Portal',
            description: 'Internal HR management portal.',
            priority: 'medium',
            status: 'planning',
        },
    ],

    assignments: [
        {
            id: 1,
            employeeId: 1,
            projectId: 1,
            role: 'Frontend Developer',
            priority: 'high',
            assignedDate: '2026-09-01',
        },
        {
            id: 2,
            employeeId: 1,
            projectId: 2,
            role: 'React Developer',
            priority: 'critical',
            assignedDate: '2026-09-02',
        },
        {
            id: 3,
            employeeId: 2,
            projectId: 3,
            role: 'Business Analyst',
            priority: 'medium',
            assignedDate: '2026-09-03',
        },
    ],
};

const dataProviderFactory = () => fakeDataProvider(data);

export default dataProviderFactory;
