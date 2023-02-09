import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = new PocketBase("http://127.0.0.1:8090");

// if the no user then pb.authStore.model will be null
//we make this a svelte store because there will be other places in the application that we want to get the active user
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  console.log("Authstore User has changed", auth);
  currentUser.set(pb.authStore.model);
});

export const register: (
  name: string,
  age:number,
  username: string,
  password: string,
  confirmPassword: string
) => Promise<void> = async (name,age, username, password, confirmPassword) => {
    const userData = {
        name,
        age,
        username,
        password,
        passwordConfirm: confirmPassword
    }
  const createdUser = await pb.collection("users").create(userData);
  console.log(createdUser)
//   await login(createdUser.load()
};

export const addPet = async(name, petTypeID, ownerID) => {
  const data = {
    "name": name,
    "petType": petTypeID,
    "owner": ownerID
};

const record = await pb.collection('pets').create(data);
}

export const getUsers = async() => {
  // you can also fetch all records at once via getFullList
const records = await pb.collection('users').getFullList(200 /* batch size */, {
  sort: 'created',
});
return records
}

export const getPetTypes = async() => {
//   you can also fetch all records at once via getFullList
const records = await pb.collection('petType').getFullList(200 /* batch size */, {
  sort: '-created',
});
return records
}