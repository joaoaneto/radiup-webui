import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { User } from './../user';

import { RegisterService } from './../services/register.service'

@Component({
    selector: 'register-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    loading = false;
    nextForm: boolean = true;

    userForm: FormGroup;
    
    user: User;

    constructor(private fb: FormBuilder, private rs: RegisterService, private router: Router) {
        this.createForm();        
    }

    get name() { return this.userForm.get('name'); }

    get username() { return this.userForm.get('username'); }
    
    get email() { return this.userForm.get('email'); }
    
    get password() { return this.userForm.get('password'); }

    createForm(): void {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            username: ['', [Validators.required, Validators.pattern("[a-z]*[0-9]*")]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        })
    }

    submitNextForm(): void {
        this.nextForm = true;
    }

    submitBackForm(): void {
        this.nextForm = false;
    }

    onSubmit() {
        this.loading = true;
        this.user = this.userForm.value;
        this.user.password = btoa(this.userForm.get('password').value);
        console.log(this.user);
        this.rs.registerUser(this.user)
            .subscribe(
                data => {
                    console.log("Register OK...")
                    this.router.navigate(['/login'])
                }
            );
    }

}