import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
    selector: 'logout-user',
    templateUrl: 'logout.component.html',
})
export class LogoutComponent {

    constructor(private authService: AuthService, private router: Router) { this.logout(); }

    logout(): void {
        this.authService.makeLogout();
        this.router.navigate(['/login']);
        // treat this better
    }

}