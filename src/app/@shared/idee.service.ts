import { Injectable } from '@angular/core';
import { Idee } from '../model/idee';

@Injectable()
export class IdeeService {
 private idees : Idee[];

  constructor() { 
    this.idees = [];
  }

  addIdee(log : string, lib : string, like : number, dislike : number, pseudo : string){ //  
    const idee : Idee = {login : log, libelle : lib, like : like, dislike : dislike, pseudo: pseudo}; //
    this.idees.push(idee);
  }

  getIdees() {
    return this.idees;
  }
 
  getLikes(){
    return this.idees[3].like;
  }

  getDislikes(){
    return this.idees[4].dislike;
  }

}