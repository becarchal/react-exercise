/**
 * Created by f160024 on 2016/7/21.
 */
var Promise = require("bluebird");

export function getUserInfo(username){
    var userInfoPromise = fetch(`https://api.github.com/users/${username}?client_id=f2afcb26944e3e153120&client_secret=3b9442ca42e76831c0a9581c652fa38c7057563c`).then(
        response=>{
            return response.json();
        }
    )

    var orgsPromise = fetch(`https://api.github.com/users/${username}/orgs?client_id=f2afcb26944e3e153120&client_secret=3b9442ca42e76831c0a9581c652fa38c7057563c`).then(
        response=>{
            return response.json();
        }
    )

    return Promise.all([userInfoPromise,orgsPromise]);
}

export function getUserRepo(username){
    console.log(username)
    return fetch(`https://api.github.com/users/${username}/repos?per_page=250&client_id=f2afcb26944e3e153120&client_secret=3b9442ca42e76831c0a9581c652fa38c7057563c`).then(
        response=>{
            console.log(response)
            return response.json();
        }
    )
}
export function getQueryMsg(message,indexPage,count){
    return fetch(`https://api.github.com/search/repositories?q=${message}&sort=stars&order=desc&page=${indexPage}&per_page=${count}&client_id=f2afcb26944e3e153120&client_secret=3b9442ca42e76831c0a9581c652fa38c7057563c`).then(
        response=>{
            return response.json();
        }
    )
}