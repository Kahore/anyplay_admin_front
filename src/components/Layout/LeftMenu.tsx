import React from "react";

import {NavLink} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import useStyles from "../../utils/useStyles";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import {useTheme} from "@material-ui/core/styles";
import routes from '../../router'
import IconButton from "@material-ui/core/IconButton";

const LeftMenu: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={[classes.toolbar, 'flex-center', 'p5', 'bc'].join(' ')} >
        <NavLink to='/' className="w100">
        <img className="w100"
             src={require('../../assets/WhiteFaceTagline.png')}
             alt="tagline"/>
        </NavLink>
      </div>
      <Divider />
      <List>
        {routes.map((route) => (
          route.isUsedInMenu ?
            <NavLink to={route.path} className="w100" key={route.title}>
            <ListItem button >
                <ListItemText primary={route.title} />
            </ListItem>
            </NavLink>: ''
        ))}
      </List>
    </div>
    );
    return (
      <>
        <nav className={classes.drawer}>
          <IconButton color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      className={classes.menuButton}>
            <img src={require("../../assets/menu.svg")} alt="menu" style={{maxHeight:25}}/>
          </IconButton>
          <Hidden smUp implementation="css">
            <Drawer variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          {/*<Hidden xsDown implementation="css">*/}
          {/*  <Drawer classes={{paper: classes.drawerPaper}}*/}
          {/*          variant="permanent"*/}
          {/*          open*/}
          {/*  >*/}
          {/*    {drawer}*/}
          {/*  </Drawer>*/}
          {/*</Hidden>*/}
        </nav>
        </>

    )
}


export default LeftMenu
