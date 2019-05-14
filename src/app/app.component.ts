import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '亚麻荨营销平台';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){
    this.authenticationService.currentUser.subscribe(
      x => this.currentUser = x
    )
  }
}
