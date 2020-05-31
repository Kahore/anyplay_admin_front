import React from "react";
import {NavLink} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import routes from '../../router'

const LeftMenu: React.FC<{onLinkClick: any}> = ({onLinkClick}) => {
  const some = (routeTitle:string) => {
    onLinkClick(routeTitle)
  }
    return (
      <List>
          {routes.map((route) => (
            route.isUsedInMenu ?
              <NavLink to={route.path} className="w100" key={route.title} onClick={some.bind(null,route.title)}>
                <ListItem button >
                  <ListItemText primary={route.title} />
                </ListItem>
              </NavLink>: ''
          ))}
        </List>
    )
}


export default LeftMenu
