import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="flex flex-col justify-center items-center h-max">
        <Card sx={{ minWidth: 275 }} className="m-5 w-9/12">
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              สวัสดีทุกคน 😚
            </Typography>
            <Typography variant="h5" component="div">
              My Friendship
            </Typography>
            <Typography variant="body2">
              อยากให้ทุกคนมาเขียน Friendship กันเยอะๆนะครับ.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }} className="m-5 w-9/12">
          <CardContent>
            <Typography variant="h5" component="div">
              วาดรูป
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Drawing</Typography>
            <Typography variant="body2">
              ใครอยากวาดอะไรให้ วาดมาได้เลยน้า.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='/canvas'>เริ่มวาด</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="m-5 w-9/12">
          <CardContent>
            <Typography variant="h5" component="div">
              เขียนข้อความ
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Writing</Typography>
            <Typography variant="body2">
              ใครอยากเขียนอะไรให้ มาเขียนมาได้เลยน้า.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='/write'>เริ่มเขียน</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}