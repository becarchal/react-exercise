import request from '../utils/request';
export async function query() {
  return request('/api/users');
}
export function getUserProfile(username) {

	var user = request(`/api/users/${username.username}?client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`);
	var org = request(`/api/users/${username.username}/orgs?client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`);
    return Promise.all([user,org]);
}
export function getUserRepos(username) {

	var repos = request(`/api/users/${username.username}/repos?per_page=250&client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`);
    return repos;
}
export function searchRepo(username) {

	var repos = request(`/api/users/${username.username}/repos?per_page=250&client_id=8a9bbf3c53006781069d&client_secret=6febf2880914f1e4fe825813215d32f435050fab`);
    return repos;
}