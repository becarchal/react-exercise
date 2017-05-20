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
    *query(action, { call, put }) {  // eslint-disable-line
      const username = action.username;
      const [userInfoPromise, orgsPromise] = yield call(usersService.getUserProfile, username);
      yield put({ type: 'queryprofilesuccess', userInfoPromise, orgsPromise });
    },
    *queryrepos(action, { call, put }) {  // eslint-disable-line
      const username = action.username;
      const data = yield call(usersService.getUserRepos, username);
      yield put({ type: 'queryreposuccess', data });
    },
  },

  reducers: {
    queryprofilesuccess(state, { userInfoPromise, orgsPromise }) {
      return { ...state, datalist: userInfoPromise, orgs: orgsPromise };
    },
    queryreposuccess(state, { data }) {
      return { ...state, repos: data };
    },
  },

};
