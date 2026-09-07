export type Status = 'Active' | 'Inactive' | 'In Progress' | 'Planning' | 'Completed' | 'Pending' | 'Approved';

export type Employee = {
    id: string;
    employeeNumber: string;
    name: string;
    email: string;
    department: string;
    designation: string;
    manager: string;
    location: string;
    employmentType: 'Full-time' | 'Contract';
    joiningDate: string;
    status: 'Active' | 'Inactive';
};

export type Project = { id: string; name: string; owner: string; team: string; deadline: string; progress: number; priority: 'High' | 'Medium'; status: Status };
export type Task = { id: string; title: string; project: string; assignee: string; dueDate: string; priority: 'High' | 'Medium'; status: 'Todo' | 'In Progress' | 'Done' };
export type CalendarEvent = { id: string; title: string; date: string; type: 'Meeting' | 'Deadline' | 'Leave' | 'Task' };
export type Department = { id: string; name: string; manager: string; employees: number; projects: number; status: 'Active' };
