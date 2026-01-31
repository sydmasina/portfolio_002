import { Container, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

function Projects() {
  const ProjectList = [
    {
      _id: "6269423d1354342334b1866c",
      title: "Full-Stack Real-Time Dating Application",
      category: "Full-Stack Application", // Added category
      description:
        "A comprehensive social networking platform built with ASP.NET Core and Angular. This project features real-time communication powered by SignalR, allowing for instant messaging and live user presence tracking. It showcases a robust implementation of secure authentication, complex data filtering, and a seamless, reactive user experience.",
      technologies: [
        "ASP.NET Core 9",
        "Entity Framework Core",
        "SignalR",
        "JWT (JSON Web Tokens)",
        "AutoMapper",
        "SQL Server",
        "Angular",
        "Bootstrap",
        "Cloudinary API",
      ],
      siteLink: "https://syd-dating-app.azurewebsites.net/",
      imageLink:
        "https://res.cloudinary.com/djltat0ph/image/upload/v1769848779/MyPortfolio/dating-app-gif_q6irsq.gif",
      codeLink: "https://github.com/sydmasina/DatingApp",
    },
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
