import { useState } from 'react';
import { List, ListItem as MuiListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete, Add as AddIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ColorPalette from './ColorPalette';

// Define your styles
const ListItem = styled(MuiListItem)({
  color: 'black',
  '&:hover': {
    color: 'dakrblack',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)', // Add a shadow on hover
  },
});

const PlusIcon = styled(AddIcon)({
  fontSize: '25px',
  color: 'darkblack',
});

const NavList = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [showColorPalette, setShowColorPalette] = useState(false);

  const handleToggleColorPalette = () => {
    setShowColorPalette(!showColorPalette);
  };

  const navList = [
    { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
    { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
  ];
  
  return (
    <List style={{ flexDirection: isSmallScreen ? 'column' : 'row' }}>
      <ListItem button onClick={handleToggleColorPalette}>
        <ListItemIcon>
          <PlusIcon />
        </ListItemIcon>
        <ListItemText primary="Change Color" />
      </ListItem>
      {showColorPalette && <ColorPalette />}
      {navList.map(list => (
        <ListItem button key={list.id}>
          <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
            <ListItemIcon>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default NavList;
