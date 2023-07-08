import * as React from 'react';
import { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Slide from '@mui/material/Slide';
import OpenInNew from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';


class ProjectCard extends Component {
    render(){
        return (
            <Slide
            direction="up"
            in={true}
            >
            <Card sx={{ 
                mt:4,
                maxWidth: 750,
                backgroundColor: 'primary.main',
                color: 'white'
                }}
                >
              <CardActionArea  color="primary">
                <CardMedia
                  component="img"
                  height="400"
                  image={this.props.imageLink}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {this.props.title}
                  </Typography>
                  <Typography variant="body2" color='black'>
                    {this.props.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button  
                sx={{mr:1}}
                href={this.props.siteLink}  
                target='_blank'  
                variant="contained" size="small" color="secondary">
                  <OpenInNew  sx={{mr:1}} />  Visit site
                </Button>
                <Button 
                sx={{backgroundColor: 'black'}} 
                href={this.props.codeLink}  
                target='_blank'  
                variant="contained" size="small">
                 <GitHubIcon sx={{mr:1}} />  View Code
                </Button>
              </CardActions>
            </Card></Slide>
          );
    }
}
export default ProjectCard