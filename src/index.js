import dva from 'dva';
import './index.html';
import './index.css';
import createLogger from 'redux-logger';
import createLoading from 'dva-loading';
import * as config from './utils/configuration';
import * as models from './models';
// import { useRouterHistory } from 'dva/router';
// import { createHashHistory } from 'history';
// 1. Initialize
// const app = config.isDev() ? dva({
//   onAction: createLogger(),
// }) : dva();
const app = dva({
  onAction: createLogger(),
});
// const app = dva({
//   history: useRouterHistory(createHashHistory)({ queryKey: false }),
// });

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
// app.model(require('./models/users'));
// app.model(require('./models/repository'));
Object.keys(models).forEach(key => app.model(models[key]));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
