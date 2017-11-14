import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { User } from './../user';

@Injectable()
export class RegisterService {
    
    constructor(private http: Http) { }

    // This function will make POST request to User service endpoint /register
    registerUser(user: User) {
        return this.http.post('http://localhost:6767/register', user);
    }


}