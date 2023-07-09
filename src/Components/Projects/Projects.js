import React from 'react'
import ProjectCard from './ProjectCard';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

function Projects (){
    const ProjectList = [
        {
            _id:"6269423d1354342334b1866c",
            title:"YelpCamp",
            description:"Is a collection of campgrounds. Users  can view existing campground, add their own campground, leave a review. User have to be logged to add or delete THEIR review, create, edit or delete THEIR campgrounds. Use Mapbox Api to ESTIMATE a location and maps it to Cluster display",
            technologies:["JavaScript","EJS","HTML5","CSS3","Node.js","MongoDB","Express","PassportOAuth"],
            siteLink:"https://yelp-camp-fh2a.onrender.com/",
            imageLink:"https://res.cloudinary.com/djltat0ph/image/upload/v1651065400/MyPortfolio/brtawzlanjy8ssd0kvmv.gif",
            codeLink: "https://github.com/sydmasina/YelpCamp"
        },
        {
            _id:"6445173a9e29ertfd0",
            title:"Hangman Game",
            description:"A word guessing game that's implemented using REACT basics. The main intension is make use on props, state and event handlers to work with Components, that includeds Parent and Child components. Passing data down or up between components. ",
            technologies:["ReactJS","JavaScript","NodeJS", "NPM Packages","HTML5","CSS3"],
            siteLink:"https://sydmasina.github.io/hamangame/",
            imageLink:"https://res.cloudinary.com/djltat0ph/image/upload/v1688890555/GifMaker_20230709101513364_uxbqfc.gif",
            codeLink: "https://github.com/sydmasina/hamangame"
        },
        {
            _id:"6445173a9e29acea905770d0",
            title:"Vue-Monoster-Game",
            description:"A monster game created with vue. A user can attack a monster, perform special attacks that deal more damage to the monster, can use heal to boost health. Every time a user makes a move the monster deals a random amount of damage.",
            technologies:["VUEJS","JavaScript","NodeJS", "NPM Packages","HTML5","CSS3"],
            siteLink:"https://vue-monster-game.onrender.com/",
            imageLink:"https://res.cloudinary.com/djltat0ph/image/upload/v1682249529/MyPortfolio/boiy508wzbhcs5agomrq.gif",
            codeLink: "https://github.com/sydmasina/Vue-Monster-Game"
        },
        {
            _id:"626ba0c721fd3716039d5328",
            title:"TV Shows Search API",
            description:"This a search API, that search for TV shows and updates response on page without refreshing the entire page.",
            technologies:["JavaScript","HTML5","CSS3"],
            siteLink:"https://sydmasina.github.io/TV-Shows-Search-API/",
            imageLink:"https://res.cloudinary.com/djltat0ph/image/upload/v1651220678/MyPortfolio/fmjnpfnfrrclvure7cfs.gif",
            codeLink: "https://github.com/sydmasina/TV-Shows-Search-API"
        },
        {
            _id:"626ba61c21fd3716039d532f",
            title:"Ping-Pong",
            description:"A simple app a that uses JavaScript DOM-manipulation to keep score of a PingPong Game.",
            technologies:["JavaScript","DOM Manipulation","HTML5","CSS3"],
            siteLink:"https://sydmasina.github.io/PingPong/",
            imageLink:"https://res.cloudinary.com/djltat0ph/image/upload/v1651222043/MyPortfolio/etmqz3vlnkc9ta8nlf2c.gif",
            codeLink: "https://github.com/sydmasina/PingPong"
        }
        
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
                        {...project}
                        /> 
                })
            }
        </Box>
    )
}
export default Projects;