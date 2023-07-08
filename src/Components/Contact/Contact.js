import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Contact (prop){
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
                        Contact Me
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
                    <CardContent color="primary">
                    <Typography sx={{ fontFamily: 'emoji', mb:4}} gutterBottom variant="h6" component="div">
                    If you want to connect with me, you can send me an email: <b>masinasydwell@gmail.com</b>. Or you can reach me in the following platforms:
                    </Typography>
                    <Button sx={{mr:2, backgroundColor: 'black'}}  
                        variant="contained"
                        href="https://github.com/sydmasina"
                        target='_blank'
                    ><GitHubIcon sx={{mr:1}}/> Github</Button>

                    <Button sx={{mr:2}} 
                    variant="contained"
                    href="https://www.linkedin.com/in/sydwellmasina/"
                    target='_blank'
                    ><LinkedInIcon sx={{mr:1}} /> LinkedIn</Button>
                    <Button  
                    variant="contained"
                    href="https://twitter.com/SydMasina"
                    target='_blank'
                    ><TwitterIcon sx={{mr:1}} /> Twitter</Button>
                    </CardContent>
                </Card>
            </Box>
        </Fade>
    )
}