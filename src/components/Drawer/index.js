import React from 'react';
import {
  Drawer as MDrawer,
  List,
  Toolbar,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Home as HomeIcon, Favorite as FavoriteIcon } from '@mui/icons-material'

export default function Drawer(props) {
  const { toggleDrawer, isDrawerOpen } = props;
  const drawerWidth = 240;

  const drawerList = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'Favorites',
      icon: <FavoriteIcon />,
    }
  ];

  const list = () => {
    return (
      <Box
        sx={{ width: drawerWidth }}
      >
        <List>
          {drawerList.map((each, index) => (
            <ListItem button key={each.text}>
              <ListItemIcon>
                {each.icon}
              </ListItemIcon>
              <ListItemText primary={each.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  return (
    <MDrawer
      anchor='left'
      open={isDrawerOpen}
      onClose={() => {
        toggleDrawer(false)
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      {list()}
    </MDrawer>
  );
}