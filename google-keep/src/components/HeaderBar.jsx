import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`

const SearchField = styled(TextField)`
margin-left: 25px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
`

const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>Keep</Heading>
        {isSmallScreen ? (
          <IconButton>
            <Search />
          </IconButton>
        ) : (
          <SearchField
            variant="standard"
            placeholder="Search notes"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{ 
              startAdornment: <Search />,
              disableUnderline: true
            }}
          />
        )}
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;
