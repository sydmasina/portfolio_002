import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Contact'];

function Navbar(props) {
  const { window, handleNavclick } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box color='primary' onClick={handleDrawerToggle} sx={{bgcolor:'primary', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SydMasina
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem  key={item} disablePadding>
            <ListItemButton onClick={(e)=>handleNavclick(e, item)} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ ml:2, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <Stack direction="row" spacing={1}>
             <Avatar variant='outlined' color='primary' alt='SM'
                        src="https://res.cloudinary.com/djltat0ph/image/upload/v1688836349/one-piece-mugiwara-flag-logo-08F872AFB6-seeklogo.com_voxz2r.png" />
                    
             <Typography variant='h6' sx={{  ml:5, display: 'inline' }}>
             SydMasina
             </Typography>
          </Stack>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr:4 }}>
            {navItems.map((item) => (
              <Button onClick={(e)=>handleNavclick(e, item)} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;