import React, {useState} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Layout/Navbar";
import {Container, createStyles, Theme} from "@material-ui/core";
import AudiobooksView from "./views/Audiobooks";
import AudiobookDetailsView from "./views/AudiobookDetails";
import UsersView from "./views/Users";
import {makeStyles} from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth - 150,
    },
  }),
);


export default function ResponsiveDrawer() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState()
  const onMenuChange = (isOpen:boolean) => {
    setIsOpen(isOpen)
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Container >
          // @ts-ignore
          <Navbar onMenuChange={onMenuChange}/>
          <Switch>
            <main className={clsx(classes.content, {
              [classes.contentShift]: isOpen,
            })}>
              <div className={classes.drawerHeader} />
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
