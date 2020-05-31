import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useStyles from "./utils/useStyles";
import Navbar from "./components/Layout/Navbar";
import {Container} from "@material-ui/core";
import AudiobooksView from "./views/Audiobooks";
import AudiobookDetailsView from "./views/AudiobookDetails";
import UsersView from "./views/Users";

export default function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar/>
        <Container  className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <main className={classes.content}>
              <>
                {/*{ routes.map((route, index) => (*/}
                {/*  <Route route.mode as exact*/}
                {/*         key={route.title}*/}
                {/*         component={route.component}*/}
                {/*         // component={(props:any) => (route.component)({...route.props, ...props})}*/}
                {/*         path={route.path}*/}
                {/*         title={route.title}*/}
                {/*         />*/}
                {/*         ))*/}
                {/*}*/}
                <Route exact path='/' render={()=><h2>Welcome to Aniplay admin panel!</h2>}/>
                <Route exact
                path='/audiobooks'
                component={AudiobooksView}
                title='Audiobooks'
               />
                <Route strict
                       path='/audiobooks/:id'
                       component={AudiobookDetailsView}
                       title='Audiobooks details'
                />
                <Route exact
                       path='/users'
                       component={UsersView}
                       title='Users'
                />
              </>
            </main>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
