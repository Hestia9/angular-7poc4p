import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../@shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Idee } from '../../model/idee.ts';
import { IdeeService } from '../../@shared/idee.service';

@Component({
  selector: 'app-boiteidee',
  templateUrl: './boiteidee.component.html',
  styleUrls: ['./boiteidee.component.css']
})
export class BoiteideeComponent implements OnInit {

  user : User;
  formIdee : FormGroup;
  ideeU : Array<Idee>;

  constructor(private ideeService : IdeeService ,private authService : AuthService, private formBuild : FormBuilder, private router: Router) { }

  value = '';
  ngOnInit() {
    
    this.initForm();
    this.user = this.authService.getUser();
    this.ideeU = this.ideeService.getIdees();
  }
 
  initForm(){
    this.formIdee = this.formBuild.group({
      nom:'',
      libelle:'',
      like:'0',
      dislike:'0',
      auteur:''
    });
  }

  addIdee(){
    this.ideeService.addIdee(this.formIdee.get('nom').value, this.formIdee.get('libelle').value, this.formIdee.get('like').value, this.formIdee.get('dislike').value, this.authService.get().login)
    console.log(this.ideeService.getIdees());
  }

  returnLogin(){
    this.router.navigate(['/connexion']);
  }

  like(idee:Idee){
    idee.like++;
  }

  dislike(idee : Idee){
    idee.dislike++;
  } 

}