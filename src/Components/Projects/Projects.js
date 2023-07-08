import React from 'react'
import ProjectCard from './ProjectCard';
import Box from '@mui/material/Box';

function Projects (){
    const ProjectList = [
        {id: "12", name:"Campground Bookings"},
        {id: "10", name:"Todo List"},
    ]
    return (
        <Box sx={{
            display: 'flex', 
            alignItems: 'center',
            flexDirection: 'column',
            mt:6
        }}>
            {
                ProjectList.map(project =>{
                    return <ProjectCard
                     sx={{mt: 2}}
                    />
                })
            }
        </Box>
    )
}
export default Projects;