import * as React from 'react';
import { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Slide from '@mui/material/Slide';


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
                <Button  variant="contained" size="small" color="secondary">
                  Visit site
                </Button>
                <Button sx={{backgroundColor: 'black'}} variant="contained" size="small">
                  View Code
                </Button>
              </CardActions>
            </Card></Slide>
          );
    }
}
export default ProjectCard