import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VoluntarySuggestionComponent } from './voluntary-suggestion/voluntary-suggestion.component';
import { SearchComponent } from './search/search.component';

import { MusicService } from './services/music.service';
import { RegisterService } from './services/register.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'suggestion',
    component: VoluntarySuggestionComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    VoluntarySuggestionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MusicService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
