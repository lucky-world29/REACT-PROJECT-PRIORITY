import { useState } from 'react';
import { AddRounded, CalendarMonthRounded, CheckRounded } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material';

type Task = { id: number; title: string; date: string; done: boolean };
const initialTasks: Task[] = [
    { id: 1, title: 'Review design handoff', date: '2026-09-09', done: false },
    { id: 2, title: 'Employee onboarding', date: '2026-09-12', done: false },
    { id: 3, title: 'Sprint retrospective', date: '2026-09-16', done: false },
];

const CalendarTasks = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('2026-09-20');
    const addTask = () => {
        if (!title.trim()) return;
        setTasks([...tasks, { id: Date.now(), title: title.trim(), date, done: false }]);
        setTitle(''); setOpen(false);
    };
    const toggle = (id: number) => setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
    return <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Box><Typography variant="h4" fontWeight={800}>Calendar & tasks</Typography><Typography color="text.secondary" sx={{ mt: 0.5 }}>Plan the team’s most important work.</Typography></Box>
            <Button onClick={() => setOpen(true)} variant="contained" startIcon={<AddRounded />}>New task</Button>
        </Box>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2.5}>
            <Card sx={{ flex: 1.3 }}><CardContent sx={{ p: 3 }}>
                <Typography fontWeight={700} sx={{ mb: 2 }}>September 2026</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
                    {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => <Typography key={day} align="center" color="text.secondary" fontSize={12}>{day}</Typography>)}
                    {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
                        const hasTask = tasks.some(task => Number(task.date.slice(-2)) === day);
                        return <Box key={day} sx={{ minHeight: 64, border: '1px solid', borderColor: day === 7 ? 'primary.main' : 'divider', borderRadius: 2, p: 0.8, bgcolor: day === 7 ? 'primary.light' : 'transparent' }}><Typography fontSize={13} fontWeight={day === 7 ? 800 : 500}>{day}</Typography>{hasTask && <Box sx={{ mt: 0.5, height: 4, borderRadius: 3, bgcolor: 'primary.main' }} />}</Box>;
                    })}
                </Box>
            </CardContent></Card>
            <Card sx={{ flex: 0.7 }}><CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}><CalendarMonthRounded color="primary" /><Typography fontWeight={700}>Upcoming tasks</Typography></Box>
                <Stack spacing={1.25}>{tasks.sort((a,b) => a.date.localeCompare(b.date)).map(task => <Box key={task.id} sx={{ display: 'flex', gap: 1, alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 1.25 }}><IconButton color={task.done ? 'primary' : 'default'} onClick={() => toggle(task.id)} size="small"><CheckRounded /></IconButton><Box><Typography sx={{ textDecoration: task.done ? 'line-through' : 'none', fontWeight: 600, fontSize: 14 }}>{task.title}</Typography><Typography color="text.secondary" fontSize={12}>{new Date(`${task.date}T00:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</Typography></Box></Box>)}</Stack>
            </CardContent></Card>
        </Stack>
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs"><DialogTitle>Create task</DialogTitle><DialogContent><Stack spacing={2} sx={{ pt: 1 }}><TextField autoFocus label="Task title" value={title} onChange={event => setTitle(event.target.value)} /><TextField label="Due date" type="date" value={date} onChange={event => setDate(event.target.value)} slotProps={{ inputLabel: { shrink: true } }} /></Stack></DialogContent><DialogActions><Button onClick={() => setOpen(false)}>Cancel</Button><Button onClick={addTask} variant="contained">Add task</Button></DialogActions></Dialog>
    </Box>;
};

export default CalendarTasks;
