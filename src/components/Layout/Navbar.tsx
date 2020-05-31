import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {NavLink} from "react-router-dom";
import LeftMenu from "./LeftMenu";
import useStyles from "../../utils/useStyles";

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <NavLink to="/">
            <IconButton color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
              {/*<MenuIcon />*/}
              MenuIcon
            </IconButton>
          </NavLink>
          <Typography variant="h6" noWrap>
            'navigator'
          </Typography>
                    {/*{auth && (*/}
                    {/*    <div>*/}
                    {/*        <IconButton*/}
                    {/*            aria-label="account of current user"*/}
                    {/*            aria-controls="menu-appbar"*/}
                    {/*            aria-haspopup="true"*/}
                    {/*            onClick={handleMenu}*/}
                    {/*            color="inherit"*/}
                    {/*        >*/}
                    {/*            /!*<AccountCircle />*!/*/}
                    {/*            icons here*/}
                    {/*        </IconButton>*/}
                    {/*        <Menu*/}
                    {/*            id="menu-appbar"*/}
                    {/*            anchorEl={anchorEl}*/}
                    {/*            anchorOrigin={{*/}
                    {/*                vertical: 'top',*/}
                    {/*                horizontal: 'right',*/}
                    {/*            }}*/}
                    {/*            keepMounted*/}
                    {/*            transformOrigin={{*/}
                    {/*                vertical: 'top',*/}
                    {/*                horizontal: 'right',*/}
                    {/*            }}*/}
                    {/*            open={open}*/}
                    {/*            onClose={handleClose}*/}
                    {/*        >*/}
                    {/*            <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                    {/*            <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                    {/*        </Menu>*/}
                    {/*    </div>*/}
                    {/*)}*/}
        </Toolbar>
      </AppBar>
      <LeftMenu/>
    </div>
  );
}
