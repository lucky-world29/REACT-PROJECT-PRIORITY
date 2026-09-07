import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Analytics = () => {
    const theme = useTheme();
    const slices = [42, 27, 18, 13];
    let offset = 0;
    const gradient = slices.map((value, index) => {
        const start = offset;
        offset += value;
        const colors = [theme.palette.primary.main, '#22C55E', '#F59E0B', '#E2E8F0'];
        return `${colors[index]} ${start}% ${offset}%`;
    }).join(', ');
    return <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" fontWeight={800}>Analytics</Typography>
        <Typography color="text.secondary" sx={{ mt: 0.5, mb: 3 }}>A live snapshot of team delivery and workload.</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
            <Card sx={{ flex: 1 }}><CardContent sx={{ p: 3 }}>
                <Typography fontWeight={700}>Project distribution</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, py: 4 }}>
                    <Box sx={{ width: 190, height: 190, borderRadius: '50%', background: `conic-gradient(${gradient})`, position: 'relative', '&:after': { content: '""', position: 'absolute', inset: 38, borderRadius: '50%', backgroundColor: 'background.paper' } }} />
                    <Stack spacing={1.2}>{['Active · 42%', 'Planning · 27%', 'Review · 18%', 'On hold · 13%'].map((item, index) => <Typography key={item} sx={{ fontSize: 13, color: index === 0 ? 'primary.main' : 'text.secondary' }}>{item}</Typography>)}</Stack>
                </Box>
            </CardContent></Card>
            <Card sx={{ flex: 1 }}><CardContent sx={{ p: 3 }}>
                <Typography fontWeight={700}>Weekly delivery</Typography>
                <Box sx={{ display: 'flex', height: 220, alignItems: 'end', gap: 1.5, pt: 3 }}>{[45, 62, 48, 84, 72, 96, 78].map((height, index) => <Box key={index} sx={{ flex: 1, height: `${height}%`, borderRadius: '8px 8px 3px 3px', bgcolor: index === 5 ? 'primary.main' : 'primary.light' }} />)}</Box>
                <Typography color="text.secondary" fontSize={12} sx={{ mt: 1.5 }}>Mon &nbsp;&nbsp; Tue &nbsp;&nbsp; Wed &nbsp;&nbsp; Thu &nbsp;&nbsp; Fri &nbsp;&nbsp; Sat &nbsp;&nbsp; Sun</Typography>
            </CardContent></Card>
        </Stack>
    </Box>;
};

export default Analytics;
