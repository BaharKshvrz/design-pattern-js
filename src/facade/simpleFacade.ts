/*
   In this example, we write fetch method with two approach.
   The "getUsers" and "getUserPosts" function have no idea about implementation of this method.
   We hide the complexity of fetch method with Factory Desing Pattern.
*/

const API_URL = "http://jsonplaceholder.typicode.com";
type User = {
         id: number,
         name: string,
         username: string,
         email: string,
}

function getUsers() {
    return getFetch(`${API_URL}/users`, {});
}

function getUserPosts(userId: number) {
    return getFetch(`${API_URL}/posts`, { userId: userId });
}

// Write getFetch with fetch
const getFetch = async(url: string, params: {}) : Promise<User[]>  => {
  const queryString = Object.entries(params).map(param => {
     return `${param[0]}=${param[1]}}`;
  }).join('&');
  const response=  await fetch(`${url}?${queryString}`, {
       method: "GET",
       headers: {"Content-Type": "application/json"}
  });
  const data = response.json();
  return data;    
}

// Write getFetch with axios
// const getFetch = async(url: string, params: {}) : Promise<User[]>  => {
//     const response=  await axios.get(url, {params});
//     return response.data;    
//  }

getUsers().then(async (users: User[]) => {
    for (const user of users) {
      const posts = await getUserPosts(user.id);
       console.log("name:", user.name);
       console.log("post counts:", posts.length);
    }
  });
