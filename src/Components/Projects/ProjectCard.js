import React, { Component } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Modal,
  Box,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      expanded: false,
    };
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });
  toggleExpand = () => this.setState({ expanded: !this.state.expanded });

  render() {
    const {
      title,
      description,
      technologies,
      siteLink,
      codeLink,
      imageLink,
      category,
    } = this.props;
    const { expanded, open } = this.state;

    return (
      <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
        <Card
          sx={{
            height: "100%", // Ensures all cards take full height
            display: "flex",
            flexDirection: "column", // Stack content vertically
            backgroundColor: "primary.main",
            color: "white",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          {/* Category Badge */}
          {category && (
            <Chip
              label={category}
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                backgroundColor: "orange", // Set the background color
                color: "black", // Text color of the category badge
                fontWeight: "bold",
                zIndex: 1, // Ensure it's above other card content
              }}
            />
          )}
          {/* Project Image */}
          <CardMedia
            component="img"
            height="300"
            image={imageLink}
            alt={title || "Project Image"}
            sx={{ cursor: "pointer" }}
            onClick={this.handleOpen}
          />

          {/* Project Details */}
          <CardContent sx={{ flexGrow: 1 }}>
            {" "}
            {/* Takes remaining space */}
            <Typography
              gutterBottom
              variant="h5"
              sx={{ fontFamily: "cursive" }}
            >
              {title}
            </Typography>
            {/* Collapsible Description */}
            <Typography variant="body2" color="white">
              {expanded ? description : description.slice(0, 100) + "..."}
            </Typography>
            <Button
              size="small"
              sx={{
                mt: 1,
                textTransform: "none",
                color: "primary.contrastText",
              }}
              onClick={this.toggleExpand}
            >
              {expanded ? "Show Less" : "Read More"}
            </Button>
            {/* Technologies Used */}
            {technologies?.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Technologies Used:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                  {technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{ backgroundColor: "orange", color: "black" }}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </CardContent>

          {/* Action Buttons */}
          <CardActions sx={{ justifyContent: "center", pb: 2 }}>
            {" "}
            {/* Pushes buttons to bottom */}
            <Button
              href={siteLink}
              target="_blank"
              variant="contained"
              size="small"
              color="secondary"
            >
              <OpenInNew sx={{ mr: 1 }} /> Visit site
            </Button>
            <Button
              href={codeLink}
              target="_blank"
              variant="contained"
              size="small"
              sx={{ backgroundColor: "black" }}
            >
              <GitHubIcon sx={{ mr: 1 }} /> View Code
            </Button>
          </CardActions>
        </Card>

        {/* Modal for Image Preview */}
        <Modal open={open} onClose={this.handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "90vw",
              maxHeight: "90vh",
              bgcolor: "background.paper",
              p: 1,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <CardMedia
              component="img"
              image={imageLink}
              alt={title}
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Box>
        </Modal>
      </Grid>
    );
  }
}

export default ProjectCard;
