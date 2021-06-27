import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { GeneralComponent } from './general/general.component';
import { MairieComponent } from './mairie/mairie.component';
import { NewmairieComponent } from './newmairie/newmairie.component';
import { UpdatemairieComponent } from './updatemairie/updatemairie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { NewutilisateurComponent } from './newutilisateur/newutilisateur.component';
import { NewmarchandComponent } from './newmarchand/newmarchand.component';
import { MarchandComponent } from './marchand/marchand.component';
import { NewmarcheComponent } from './newmarche/newmarche.component';
import { MarcheComponent } from './marche/marche.component';
import { MarchandMarcheComponent } from './marchand-marche/marchand-marche.component';
import { RecouvreurMarcheComponent } from './recouvreur-marche/recouvreur-marche.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbartopComponent,
    GeneralComponent,
    MairieComponent,
    NewmairieComponent,
    UpdatemairieComponent,
    AccueilComponent,
    UtilisateurComponent,
    NewutilisateurComponent,
    NewmarchandComponent,
    MarchandComponent,
    NewmarcheComponent,
    MarcheComponent,
    MarchandMarcheComponent,
    RecouvreurMarcheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
