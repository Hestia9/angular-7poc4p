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
  value = '';
  //pseudos = ['test', 'test1'];

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'coucou!';
  }

  update(value: string) { this.value = value; }



  Pseudos = ['test', 'test1'];

  model = new Personne(18, 'Dr IQ', this.Pseudos[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; 
    this.authService.auth("login");
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  

}