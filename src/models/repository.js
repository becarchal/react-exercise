import *  as usersService from '../services/users';
export default {

  namespace: 'repository',

  state: {
    repo: {},
    msg: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *queryrepos({ payload: {message, indexPage, count} }, { call, put }) {  // eslint-disable-line
      const data = yield call(usersService.searchRepo, message, indexPage, count);
      yield put({ type: 'queryreposuccess', payload: {data}});
    },
  },

  reducers: {
    queryreposuccess(state,  {payload: {data: repo}}) {
      return { ...state, repo };
    },
  },

};
