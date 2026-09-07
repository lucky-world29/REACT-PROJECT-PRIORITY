import { useMemo, useState } from 'react';
import { AddRounded, DownloadRounded, MoreHorizRounded, SearchRounded } from '@mui/icons-material';
import { Avatar, Box, Button, Chip, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useDemoList } from '../hooks/useDemoQuery';
import { employeeService } from '../services';
import type { Employee } from '../domain/models';

const EmployeeList = () => {
    const { data: employees = [], isLoading } = useDemoList<Employee>('employees', employeeService.getAll);
    const [query, setQuery] = useState('');
    const [department, setDepartment] = useState('All');
    const rows = useMemo(() => employees.filter(employee => (department === 'All' || employee.department === department) && `${employee.name} ${employee.email} ${employee.employeeNumber}`.toLowerCase().includes(query.toLowerCase())), [employees, department, query]);
    return <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: { sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, mb: 3 }}><Box><Typography variant="h4" fontWeight={800}>Employees</Typography><Typography color="text.secondary" sx={{ mt: 0.5 }}>Manage your workforce, access, and organizational data.</Typography></Box><Stack direction="row" spacing={1}><Button variant="outlined" startIcon={<DownloadRounded />}>Export</Button><Button variant="contained" startIcon={<AddRounded />}>Add employee</Button></Stack></Box>
        <Box sx={{ display: 'flex', gap: 1.5, mb: 2.5, flexWrap: 'wrap' }}><TextField size="small" placeholder="Search employees..." value={query} onChange={event => setQuery(event.target.value)} slotProps={{ input: { startAdornment: <SearchRounded sx={{ mr: 1, color: 'text.disabled' }} /> } }} sx={{ minWidth: 260, flex: 1 }} /><Select size="small" value={department} onChange={event => setDepartment(event.target.value)}><MenuItem value="All">All departments</MenuItem><MenuItem value="Engineering">Engineering</MenuItem><MenuItem value="People Operations">People Operations</MenuItem></Select></Box>
        <Box sx={{ overflowX: 'auto', border: '1px solid', borderColor: 'divider', borderRadius: 3, bgcolor: 'background.paper' }}><Box component="table" sx={{ width: '100%', minWidth: 950, borderCollapse: 'collapse', '& th': { textAlign: 'left', bgcolor: 'action.hover', fontSize: 11, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '.06em', p: 1.75 }, '& td': { p: 1.5, borderTop: '1px solid', borderColor: 'divider', fontSize: 13 } }}><thead><tr>{['Employee','Department','Designation','Manager','Location','Joined','Status',''].map(label => <th key={label}>{label}</th>)}</tr></thead><tbody>{isLoading ? <tr><td colSpan={8}>Loading employees…</td></tr> : rows.map(employee => <tr key={employee.id}><td><Stack direction="row" spacing={1.25} alignItems="center"><Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main', fontSize: 12, fontWeight: 800 }}>{employee.name.split(' ').map(word => word[0]).join('')}</Avatar><Box><Typography fontWeight={700} fontSize={13}>{employee.name}</Typography><Typography color="text.secondary" fontSize={12}>{employee.employeeNumber} · {employee.email}</Typography></Box></Stack></td><td>{employee.department}</td><td>{employee.designation}</td><td>{employee.manager}</td><td>{employee.location}</td><td>{new Date(employee.joiningDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</td><td><Chip label={employee.status} size="small" color="success" variant="outlined" /></td><td><IconButton size="small"><MoreHorizRounded /></IconButton></td></tr>)}</tbody></Box></Box>
        <Typography color="text.secondary" fontSize={12} sx={{ mt: 1.5 }}>Showing {rows.length} of {employees.length} demo employees · Data is persisted locally.</Typography>
    </Box>;
};
export default EmployeeList;
