/**
 * Created by HH on 2016/7/18.
 */
import request from './../utils/request';

const Promise = require('bluebird');

export function getUserProfile(username) {
  const userInfoPromise = fetch(`api/users/${username}?client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`).then((response) => {
    return response.json();
  });
  const orgsPromise = fetch(`api/users/${username}/orgs?client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`).then((response) => {
    return response.json();
  });
  return Promise.all([userInfoPromise, orgsPromise]);
}

export function getUserRepos(username) {
  const url = `api/users/${username}/repos?per_page=250&client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`;
  return request(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

export function searchRepo(message, indexPage, count) {
  return fetch(`https://api.github.com/search/repositories?q=${message}&sort=stars&order=desc&page=${indexPage}&per_page=${count}&client_id=f2afcb26944e3e153120&client_secret=3b9442ca42e76831c0a9581c652fa38c7057563c`).then(
        (response) => {
          return response.json();
        },
    );
}
