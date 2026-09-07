import { demoCalendarEvents, demoDepartments, demoEmployees, demoProjects, demoTasks } from '../mock/demoData';
import { createMockService } from './mockStore';

export const employeeService = createMockService('priority-employees', demoEmployees);
export const departmentService = createMockService('priority-departments', demoDepartments);
export const projectService = createMockService('priority-projects', demoProjects);
export const taskService = createMockService('priority-tasks', demoTasks);
export const calendarService = createMockService('priority-calendar-events', demoCalendarEvents);
export const resetDemoData = () => [employeeService, departmentService, projectService, taskService, calendarService].forEach(service => service.reset());
