import React from 'react';
import { Router, Route, IndexRoute} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users/index';
import UserSearch from './routes/Users/UserSearch';
import RepositorySearch from './routes/Repository/RepositorySearch';
import Repositories from './routes/Repository/index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
      	<IndexRoute component={UserSearch}/>
	      <Route path="users" component={UserSearch} />
      	<Route path="users/:username" component={Users} />
	      <Route path="repository" component={RepositorySearch} />
      	<Route path="repository/:query" component={Repositories} />
	    </Route>
    </Router>
  );
}

export default RouterConfig;
