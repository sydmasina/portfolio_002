import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';


function Home(props) {
    const {handleNavclick} = props;
        return(
            <Fade
            style={{ transformOrigin: '0 0 0' }}
            timeout={3000} 
            in={true}
            >
                <Box sx={{ width: '100%', maxWidth: 600 }}>
                    <Typography sx={{ fontFamily: 'emoji'}} variant="h3" gutterBottom>
                    Hello there, I'm <Typography color='primary' variant='b'>Syd Masina.</Typography> I am a Full-Stack Software Developer.
                    </Typography>
                    <Button onClick={(e)=>handleNavclick(e, "Projects")} sx={{mt: 2}} size="large" variant="outlined">View my work &raquo;</Button>
                </Box>
            </Fade>
        )
}
export default Home;