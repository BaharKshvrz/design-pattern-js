"use strict";
/*
   In this example, we write fetch method with two approach.
   The "getUsers" and "getUserPosts" function have no idea about implementation of this method.
   We hide the complexity of fetch method with Factory Desing Pattern.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "http://jsonplaceholder.typicode.com";
function getUsers() {
    return getFetch(`${API_URL}/users`, {});
}
function getUserPosts(userId) {
    return getFetch(`${API_URL}/posts`, { userId: userId });
}
// Write getFetch with fetch
const getFetch = (url, params) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}}`;
    }).join('&');
    const response = yield fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = response.json();
    return data;
});
// Write getFetch with axios
// const getFetch = async(url: string, params: {}) : Promise<User[]>  => {
//     const response=  await axios.get(url, {params});
//     return response.data;    
//  }
getUsers().then((users) => __awaiter(void 0, void 0, void 0, function* () {
    for (const user of users) {
        const posts = yield getUserPosts(user.id);
        console.log("name:", user.name);
        console.log("post counts:", posts.length);
    }
}));
