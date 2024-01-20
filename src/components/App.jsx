import { CssBaseline } from "@mui/material";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom"

import useStyles from './styles'

import { Actors, Movies, MovieInformation, NavBar, Profile } from "./";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/movie/:id">
              <MovieInformation />
            </Route>
            <Route exact path="/actors/:id">
              <Actors />
            </Route>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
          </Switch>

      </main>
    </div>
  );
}

export default App;
