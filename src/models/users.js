import *  as usersService from '../services/users';
export default {

  namespace: 'users',

  state: {
    datalist: {},
    orgs: {},
    repos: {},
    msg: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *query({ payload }, { call, put }) {  // eslint-disable-line
      const username = payload;
      const [userInfoPromise,orgsPromise] = yield call(usersService.getUserProfile, username);
      yield put({ type: 'queryprofilesuccess', payload: {userInfoPromise}});
    },
    *queryrepos({ payload }, { call, put }) {  // eslint-disable-line
      const username = payload;
      const data = yield call(usersService.getUserRepos, username);
      yield put({ type: 'queryreposuccess', payload: {data}});
    },
  },

  reducers: {
    queryprofilesuccess(state, {payload: {userInfoPromise: datalist, orgsPromise: orgs}}) {
      return { ...state, datalist, orgs};
    },
    queryreposuccess(state,  {payload: {data: repos}}) {
      return { ...state, repos };
    },
  },

};
