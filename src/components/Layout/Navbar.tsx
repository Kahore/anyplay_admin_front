import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import {Menu, MenuItem, Drawer, AppBar, Toolbar, Typography, IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {AccountCircle} from "@material-ui/icons";
import LeftMenu from "./LeftMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    title: {
      flexGrow: 1,
    },
  }),
);
const Navbar: React.FC<{onMenuChange:any}> = ({onMenuChange}) =>{
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);
  const [openProfile, setOpenProfile] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>(document.title);
  const handleDrawerOpen = () => {
    onMenuChange(true)
    setOpen(true);
  };
  useEffect(() => {
    setTimeout(()=>{
      setTitle(document.title)
    },100)
  }, []);
  const handleDrawerClose = () => {
    onMenuChange(false)
    setOpen(false);
  };
  const onLinkClick = (routeTitle:string) => {
    handleDrawerClose();
    setTitle(routeTitle)
  }
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenProfile(true)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpenProfile(false)
    setAnchorEl(null);
  };

  // @ts-ignore
  return (
  <>
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />

        </IconButton>
        <Typography variant="h6"
                    noWrap
                    className={classes.title}>
          {title}
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openProfile}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Sign out</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
        </IconButton>
      </div>
      <LeftMenu onLinkClick={onLinkClick}/>
    </Drawer>
  </>
  );
}

export default Navbar
