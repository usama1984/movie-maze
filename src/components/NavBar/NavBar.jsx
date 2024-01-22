import React, {useState} from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'

const NavBar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isAuthenticated = true;
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {
            isMobile && (
              <IconButton 
                color='inherit'
                edge= 'start'
                style={{outline:'none'}}
                onClick={() => {}}
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
            )
          }
          <IconButton color='inherit' sx={{ml:1}} onClick={()=> {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'search...'}
          <div>
            {!isAuthenticated ? (
              <Button color='inherit' onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button 
                color='inherit'
                component = {Link}
                to = '/profile/:id'
                className={classes.linkButton}
                onClick={() => {}}>
                {!isMobile && <> My Movies &nbsp; </>}
                <Avatar 
                  style={{width: 30, height: 30}}
                  alt='Profile'
                  src='https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg'
                />
              </Button>
            )}
          </div>
          {isMobile && 'search...'}
        </Toolbar>
      </AppBar>
      <div>
        <nav>
          {isMobile ? (
            <Drawer 
              variant='temporary'
              anchor='right'
              open={mobileOpen}
              className={classes.drawerBackground}
              classes={{paper: classes.drawerPaper}}
              ModalProps={{keepMounted: true}}
            >
            <Sidebar setMobileOpen = {setMobileOpen}/>
            </Drawer>
          ) : (
            <Drawer />
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar