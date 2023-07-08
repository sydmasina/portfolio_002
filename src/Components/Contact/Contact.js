import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';


export default function Contact (prop){
    return(
        <Fade
        style={{ transformOrigin: '0 0 0' }}
        timeout={3000} 
        in={true}
        >
            <Box>
                <Typography>
                    This be the Contact Page.....
                </Typography>
            </Box>
        </Fade>
    )
}