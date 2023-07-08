import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/joy/Avatar';


export default function About(prop){
    return(
        <Fade
        style={{ transformOrigin: '0 0 0' }}
        timeout={3000} 
        in={true}
        >
            <Box sx={{
                mt:5,
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                flexDirection: 'column'
            }}>
                <Box 
                sx={{
                    mt:4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    flexDirection: 'row'
                }}
                >
                    <Avatar variant='outlined' color='primary' alt='SM' sx={{"--Avatar-size":"150px",flexDirection: 'row', mr:2 }}
                        src="https://res.cloudinary.com/djltat0ph/image/upload/v1688826965/IMG_2111_coy_sj9dzw.jpg" />
                    
                    <Typography color='primary.light' sx={{flexDirection: 'row', fontFamily: 'cursive'}} variant='h4' component="div">
                        SYDWELL MASINA
                    </Typography>
                </Box>
               
                <Card sx={{ 
                    flexDirection: 'row',
                    mt:4,
                    maxWidth: 600,
                    width: 500,
                    height: 300,
                    backgroundColor: 'transparent',
                    color: 'white'
                    }}
                    >

                <CardActionArea  color="primary">
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    Hi, I'm Syd Masina. I am Software Developer, based in Johannesburg South Africa. I have proficient skills in the Backend and frontend Technologies. Also including DevOps skills and AWS cloud computing. My main desire is to solve real world problems with the use of Technology. I love learning and growing, want to use each as a day to learn something new.
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