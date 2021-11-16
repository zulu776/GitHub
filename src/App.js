import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//LayOut
import MainLayout from "./Layout/MainLayout"

//Context
import { GitHubProvider } from "./Context/GitHubContext";

//Components
import Home from "./View/Home/Home";
import Followers from "./View/Followers/Followers";
import Following from "./View/Following/Following";

function App() {
  return (
    <GitHubProvider>
      <Router>
        <Switch>
          <MainLayout>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/Followers/:name" exact>
              <Followers />
            </Route>

            <Route path="/Following/:name" exact>
              <Following />
            </Route>
            
          </MainLayout>
        </Switch>
      </Router>
    </GitHubProvider>
  );
}

export default App;
