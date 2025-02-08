import React from "react";
import ProjectCard from "./ProjectCard";
import { Grid, Container } from "@mui/material";

function Projects() {
  const ProjectList = [
    {
      _id: "6789423d135gt34ft333",
      title: "DevSpot",
      category: "Asp.Net Application", // Added category
      description:
        "DevSpot is designed to streamline the process of posting and managing job listings for developer roles. This platform aims to connect employers with potential developer candidates efficiently. It is a working progress, as it is an MVP Project implementation.",
      technologies: [
        "ASP.NET",
        "Entity Framework",
        "Azure SQL Server",
        "SQL Database",
        "C#",
        "Azure App Service",
        "CI Github Deployments",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      siteLink:
        "https://dev-spot-app-dnd8f5epejfncja5.southafricanorth-01.azurewebsites.net/",
      imageLink:
        "https://res.cloudinary.com/djltat0ph/image/upload/v1738938548/GifMaker_20250207162521846_ywao54.gif",
      codeLink: "https://github.com/sydmasina/DevSpot",
    },
    {
      _id: "6269423d1354342334b1866c",
      title: "YelpCamp",
      category: "Full-Stack Application", // Added category
      description:
        "YelpCamp is a collection of campgrounds. Users can view existing campgrounds, add their own campground, and leave a review. Users must be logged in to add or delete their review, or create, edit, or delete their campgrounds. Uses the Mapbox API to estimate a location and display it on a cluster map.",
      technologies: [
        "JavaScript",
        "EJS",
        "HTML5",
        "CSS3",
        "Node.js",
        "MongoDB",
        "Express",
        "Passport OAuth",
      ],
      siteLink: "https://yelp-camp-fh2a.onrender.com/",
      imageLink:
        "https://res.cloudinary.com/djltat0ph/image/upload/v1651065400/MyPortfolio/brtawzlanjy8ssd0kvmv.gif",
      codeLink: "https://github.com/sydmasina/YelpCamp",
    },
    {
      _id: "6445173a9e29ertfd0",
      title: "Hangman Game",
      category: "React Game", // Added category
      description:
        "A word guessing game implemented using React basics. The main intention is to demonstrate the use of props, state, and event handlers to manage components, including parent and child components. Data is passed up and down between components.",
      technologies: [
        "ReactJS",
        "JavaScript",
        "NodeJS",
        "NPM Packages",
        "HTML5",
        "CSS3",
      ],
      siteLink: "https://sydmasina.github.io/hamangame/",
      imageLink:
        "https://res.cloudinary.com/djltat0ph/image/upload/v1688890555/GifMaker_20230709101513364_uxbqfc.gif",
      codeLink: "https://github.com/sydmasina/hamangame",
    },
    {
      _id: "6445173a9e29acea905770d0",
      title: "Vue-Monster-Game",
      category: "Vue Game", // Added category
      description:
        "A monster game created with Vue.js. The user can attack a monster, perform special attacks for more damage, and use healing abilities to boost health. Every time the user makes a move, the monster randomly deals damage.",
      technologies: [
        "VueJS",
        "JavaScript",
        "NodeJS",
        "NPM Packages",
        "HTML5",
        "CSS3",
      ],
      siteLink: "https://vue-monster-game.onrender.com/",
      imageLink:
        "https://res.cloudinary.com/djltat0ph/image/upload/v1682249529/MyPortfolio/boiy508wzbhcs5agomrq.gif",
      codeLink: "https://github.com/sydmasina/Vue-Monster-Game",
    },
    {
      _id: "626ba61c21fd3716039d532f",
      title: "Ping-Pong",
      category: "JavaScript Game", // Added category
      description:
        "A simple app that uses JavaScript DOM manipulation to keep score of a Ping-Pong game.",
      technologies: ["JavaScript", "DOM Manipulation", "HTML5", "CSS3"],
      siteLink: "https://sydmasina.github.io/PingPong/",
      imageLink:
        "https://res.cloudinary.com/djltat0ph/image/upload/v1651222043/MyPortfolio/etmqz3vlnkc9ta8nlf2c.gif",
      codeLink: "https://github.com/sydmasina/PingPong",
    },
  ];

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        {ProjectList.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </Grid>
    </Container>
  );
}
export default Projects;
