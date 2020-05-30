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
                <img className="w100"
                    src="https://assets.website-files.com/5e99d44e2b71a5f9ec9bddce/5eb33130f59523e56ade88a3_WhiteFaceTagline-p-500.png"
                     alt="tagline"/>
            </div>
            <Divider />
            <List>
                {routes.map((route, index) => (
                    route.isUsedInMenu ?
                            <ListItem button key={route.title}>
                                <NavLink to={route.path} className="w100">
                                    <ListItemText primary={route.title} >   </ListItemText>
                                </NavLink>
                    </ListItem> : ''
                ))}
            </List>
        </div>
    );
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
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
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
}


export default LeftMenu