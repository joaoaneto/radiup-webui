import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { UserAuthentication } from './../user-authentication';

@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    public getLoggedIn(): string {
        return localStorage.getItem('logged-in');
    }

    public isAuthenticated(): boolean {
        //get the token
        let loggedIn = this.getLoggedIn();
        //return a boolean reflecting
        if (loggedIn == 'true') { return true; }
        return false;
    }

    public makeLogin(userAuth: UserAuthentication) {
        return this.http.post('http://localhost:6767/auth', userAuth)
            .map(res => {
                localStorage.setItem('logged-in', res.json());
                localStorage.setItem('username', userAuth.username);
            });
    }

    public makeLogout(): void {
        localStorage.setItem('logged-in', 'false');
        localStorage.removeItem('username');

        //TODO
        //Communicate with logout in the microservice instance
        //Use JWT Authentication

    }

}