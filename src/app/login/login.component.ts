import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Http } from '@angular/http';

import { AuthService } from './../services/auth.service'

import { UserAuthentication } from './../user-authentication';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    loginForm: FormGroup;

    userAuth: UserAuthentication; 

    constructor(private http: Http, private formBuild: FormBuilder, private router: Router, private authService: AuthService) { 
        this.createForm()
    }

    get username() { return this.loginForm.get('username'); }
    
    get password() { return this.loginForm.get('password'); }

    createForm(): void {
        this.loginForm = this.formBuild.group({
            username: ['', Validators.required],
            password: ['', [Validators.minLength(6), Validators.required]]
        })
    }

    onSubmit() {
        this.userAuth = this.loginForm.value;
        this.userAuth.password = btoa(this.loginForm.get('password').value);
        console.log(this.userAuth);
        this.authService.makeLogin(this.userAuth)
            .subscribe(
                data => {
                    console.log(data)
                    //verificar status da resposta
                    this.router.navigate(['/suggestion'])
                    //redirecionar caso o login esteja ok
                }
            )
    }

}