import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { Box, Button, CardActions, Chip, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import { Component } from "react";

class ProjectCard extends Component {
  render() {
    return (
      <Slide
        direction="up"
        timeout={1500}
        in={true}
        xs={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            mt: 2,
            mb: 4,
            width: "100%",
            backgroundColor: "secondary.main",
            color: "white",
            border: "1px solid white",
          }}
        >
          <CardMedia
            component="img"
            height="500"
            image={this.props.imageLink}
            alt={this.props.title || "Project Image"}
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "cursive" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {this.props.title}
            </Typography>
            <Typography
              sx={{ fontFamily: "cursive" }}
              variant="body1"
              color="white"
            >
              {this.props.description}
            </Typography>

            {/* Technologies Used Section */}
            {this.props.technologies && this.props.technologies.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Technologies Used:
                </Typography>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  spacing={1}
                  sx={{ flexWrap: "wrap", mt: 1 }}
                >
                  {this.props.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        backgroundColor: "orange",
                        color: "black",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </CardContent>

          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              sx={{ mr: 1 }}
              href={this.props.siteLink}
              target="_blank"
              variant="contained"
              size="small"
              color="primary"
            >
              <OpenInNew sx={{ mr: 1 }} /> Visit site
            </Button>
            <Button
              sx={{ backgroundColor: "black" }}
              href={this.props.codeLink}
              target="_blank"
              variant="contained"
              size="small"
            >
              <GitHubIcon sx={{ mr: 1 }} /> View Code
            </Button>
          </CardActions>
        </Card>
      </Slide>
    );
  }
}
export default ProjectCard;
