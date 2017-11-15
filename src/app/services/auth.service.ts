import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { UserAuthentication } from './../user-authentication';

@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public isAuthenticated(): boolean {
        //get the token
        const token = this.getToken();
        //return a boolean reflecting
        return false;
    }

    public makeLogin(userAuth: UserAuthentication) {
        return this.http.post('http://localhost:6767/auth', userAuth);
    }


}