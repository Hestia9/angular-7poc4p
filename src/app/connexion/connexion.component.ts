import { Component, Input, OnInit } from '@angular/core';
import { AuthService, User } from '../@shared/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formConnexion: FormGroup;
  user: User;
  //listeUser: ListeUser;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    
    
  ) { }
  ngOnInit(){
    this.formConnexion = this.formBuilder.group({
      login: ''
    });
  }
/*
  initForm(){
    this.formConnexion = this.formBuilder.group({
      login: '',
    });
  }*/

  submitConnexionForm(){
    /*const formValue = this.formConnexion.value;
    console.log(formValue['login']);
    this.user = new User(formValue['login']);
    this.authService.auth(this.user);*/
    this.authService.auth(this.formConnexion.get('login').value);
    if((this.formConnexion.get('login').value) != ""){
      this.router.navigate(['/boite']);
    }    
  }
}