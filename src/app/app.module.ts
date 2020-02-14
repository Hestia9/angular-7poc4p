import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthService } from './@shared/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { BoiteideeComponent } from './boite/boiteidee/boiteidee.component';

const rout : Routes = [
  { path : 'boite', component:BoiteideeComponent},
  { path : 'connexion', component:ConnexionComponent},
  { path : '', component:ConnexionComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rout), FormsModule ],
  declarations: [ AppComponent, ConnexionComponent, BoiteideeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
