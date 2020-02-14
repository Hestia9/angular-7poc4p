import { Component, OnInit } from '@angular/core';
import { AuthService } from '../@shared/auth.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
   

  constructor(
    private authService: AuthService, 
    //private formBuilder: FormBuilder,
  ) { }
  clickMessage = '';

  ngOnInit() {
  }


  

  

}