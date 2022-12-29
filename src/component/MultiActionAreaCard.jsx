 import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard(props) {
  return (
    // eslint-disable-next-line no-useless-concat
    <Link style={{ textDecoration: 'none' }} to={'/productpage' + '/' + props.id} >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
