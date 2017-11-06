import { Component } from '@angular/core';

import { User } from './../user';

@Component({
    selector: 'register-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    user: User = {
        name: '',
        username: '',
        password: 'string',
        email: '',
        birthDate: new Date(),
        sex: 'string'
    }

    nextForm: boolean = true;

    submitNextForm(): void {
        this.nextForm = true;
    }

    submitBackForm(): void {
        this.nextForm = false;
    }

}