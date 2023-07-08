import * as React from 'react';
import { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


class ProjectCard extends Component {
    render(){
        return (
            <Card sx={{ 
                mt:4,
                maxWidth: 550,
                backgroundColor: 'primary.main',
                color: 'white'
                }}
                >
              <CardActionArea  color="primary">
                <CardMedia
                  component="img"
                  height="300"
                  image={this.props.imageLink}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {this.props.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {this.props.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Visit site
                </Button>
              </CardActions>
            </Card>
          );
    }
}
export default ProjectCard