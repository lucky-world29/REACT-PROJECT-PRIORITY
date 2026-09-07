import type { CalendarEvent, Department, Employee, Project, Task } from '../domain/models';

export const demoEmployees: Employee[] = [
    { id: 'emp-001', employeeNumber: 'EMP-1042', name: 'Aarav Mehta', email: 'aarav.mehta@priority.io', department: 'Engineering', designation: 'Senior Product Manager', manager: 'Priya Nair', location: 'Bengaluru', employmentType: 'Full-time', joiningDate: '2023-04-18', status: 'Active' },
    { id: 'emp-002', employeeNumber: 'EMP-1043', name: 'Maya Iyer', email: 'maya.iyer@priority.io', department: 'People Operations', designation: 'People Operations Lead', manager: 'Nikhil Shah', location: 'Mumbai', employmentType: 'Full-time', joiningDate: '2024-01-10', status: 'Active' },
];
export const demoDepartments: Department[] = [
    { id: 'dept-01', name: 'Engineering', manager: 'Priya Nair', employees: 1, projects: 1, status: 'Active' },
    { id: 'dept-02', name: 'People Operations', manager: 'Nikhil Shah', employees: 1, projects: 0, status: 'Active' },
];
export const demoProjects: Project[] = [
    { id: 'project-01', name: 'Atlas Platform', owner: 'Aarav Mehta', team: 'Product Engineering', deadline: '2026-10-20', progress: 68, priority: 'High', status: 'In Progress' },
    { id: 'project-02', name: 'Talent Experience', owner: 'Maya Iyer', team: 'People Operations', deadline: '2026-11-12', progress: 32, priority: 'Medium', status: 'Planning' },
];
export const demoTasks: Task[] = [
    { id: 'task-01', title: 'Finalize workforce dashboard', project: 'Atlas Platform', assignee: 'Aarav Mehta', dueDate: '2026-09-12', priority: 'High', status: 'In Progress' },
    { id: 'task-02', title: 'Review onboarding journey', project: 'Talent Experience', assignee: 'Maya Iyer', dueDate: '2026-09-18', priority: 'Medium', status: 'Todo' },
];
export const demoCalendarEvents: CalendarEvent[] = [
    { id: 'event-01', title: 'Leadership planning', date: '2026-09-09', type: 'Meeting' },
    { id: 'event-02', title: 'Atlas design review', date: '2026-09-12', type: 'Deadline' },
];
