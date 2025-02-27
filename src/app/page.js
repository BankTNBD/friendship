import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { home } from '@/app/resources/content';

const HeaderCard = ({ subtitle, title, description }) => (
  <Card sx={{ minWidth: 275 }} className="m-5 w-9/12">
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {subtitle}
      </Typography>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const ContentCard = ({ title, subtitle, description, link, button }) => (
  <Card sx={{ minWidth: 275 }} className="m-5 w-9/12">
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        {subtitle}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium" href={link}>{button}</Button>
    </CardActions>
  </Card>
);

export default function Page() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="flex flex-col justify-center items-center h-max">
        <HeaderCard 
          subtitle={home.header.subtitle} 
          title={home.header.title} 
          description={home.header.description} 
        />
        {home.cards.map((card, index) => (
          <ContentCard 
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            link={card.link}
            button={card.button}
          />
        ))}
      </Box>
    </div>
  );
}