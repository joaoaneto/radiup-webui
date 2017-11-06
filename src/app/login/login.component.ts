import { Component } from '@angular/core';

import { UserAuthentication } from './user-authentication';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: UserAuthentication = {
        login: 'teste',
        password: ''
    };
}