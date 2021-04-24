import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { SearchPage } from './pages/search/search_page';
import { Route } from 'react-router-dom';
import './index.css';
import { RepoListPage } from './pages/repo_list/repo_list_page';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/repositories/:username">
            <RepoListPage/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/">
            <Redirect to="/search"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
