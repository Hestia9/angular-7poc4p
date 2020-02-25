import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../@shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boiteidee',
  templateUrl: './boiteidee.component.html',
  styleUrls: ['./boiteidee.component.css']
})
export class BoiteideeComponent implements OnInit {

  user: User
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.get();
  }

}