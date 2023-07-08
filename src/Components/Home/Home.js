import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Home(props) {
    const {handleNavclick} = props;
        return(
            <Box sx={{ width: '100%', maxWidth: 600 }}>
                 <Typography variant="h3" gutterBottom>
                 Hello there, I'm <Typography color='primary' variant='b'>Syd Masina.</Typography> I am a Full-Stack Software Developer.
                </Typography>
                <Button onClick={(e)=>handleNavclick(e, "Projects")} sx={{mt: 2}} size="large" variant="outlined">View my work &raquo;</Button>
            </Box>
        )
}
export default Home;