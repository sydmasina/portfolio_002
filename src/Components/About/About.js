import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';


export default function About(prop){
    return(
        <Fade
        style={{ transformOrigin: '0 0 0' }}
        timeout={3000} 
        in={true}
        >
            <Box sx={{
                mt:4,
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                flexDirection: 'column'
            }}>
                <Typography sx={{flexDirection: 'row'}} variant='h3' component="div">
                    This be the About Page. Let's goooooooooooo!!!!!!!!!!!!!!!!!!!
                </Typography>
                <Card sx={{ 
                    flexDirection: 'row',
                    mt:4,
                    maxWidth: 600,
                    width:'50%',
                    height: 400,
                    backgroundColor: 'primary.main',
                    color: 'white'
                    }}
                    >

                <CardActionArea  color="primary">
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        This is SYD MASINA!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Box>
        </Fade>
    )
}