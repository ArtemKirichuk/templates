import { Injectable } from '@angular/core';
export class User {
  constructor(
    public name: string,
    public isAuthorized = false) { }
}

// TODO: get the user; don't 'new' it.
const alice = new User('Alice', true);
const bob = new User('Bob', false);

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = bob;
  constructor() { }
   // swap users
   getNewUser() {
     
    return this.user = this.user === bob ? alice : bob;
  }
}
