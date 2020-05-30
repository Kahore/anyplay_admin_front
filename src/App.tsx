import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useStyles from "./utils/useStyles";
import Navbar from "./components/Layout/Navbar";
import routes from "./router";

export default function ResponsiveDrawer() {
    const classes = useStyles();

    return (
        <Router>
        <div className={classes.root}>
            <CssBaseline />
            <Navbar/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    <Switch>
                        <main className={classes.content}>
                            <>
                                { routes.map((route, index) => (
                                    <Route strict
                                           component={route.component}
                                           path={route.path}
                                           title={route.title}/>
                                )) }
                            </>
                        </main>
                    </Switch>
            </main>
        </div>
        </Router>
    );
}
