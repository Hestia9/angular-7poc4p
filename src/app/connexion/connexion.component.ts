import { Component, OnInit } from '@angular/core';
import { AuthService } from '../@shared/auth.service';

@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  constructor(
    private authService: AuthService
  ) { }
  clickMessage = '';

  ngOnInit() {
  }

 /*powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  model = this.authService.auth("login");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }*/
  onSubmit() {
    this.authService.auth("login");
  }

  

  

}