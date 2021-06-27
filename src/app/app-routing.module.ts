import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MairieComponent } from './mairie/mairie.component';
import { MarchandMarcheComponent } from './marchand-marche/marchand-marche.component';
import { MarchandComponent } from './marchand/marchand.component';
import { MarcheComponent } from './marche/marche.component';
import { NewmairieComponent } from './newmairie/newmairie.component';
import { NewmarchandComponent } from './newmarchand/newmarchand.component';
import { NewmarcheComponent } from './newmarche/newmarche.component';
import { NewutilisateurComponent } from './newutilisateur/newutilisateur.component';
import { RecouvreurMarcheComponent } from './recouvreur-marche/recouvreur-marche.component';
import { UpdatemairieComponent } from './updatemairie/updatemairie.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [

  {
    path:"mairie", component:MairieComponent
  },
  {
    path:"newmairie", component:NewmairieComponent
  },
  {
    path:"newmarchand", component:NewmarchandComponent
  },
  {
    path:"marchand", component:MarchandComponent
  },
  {
    path:"newmarche", component:NewmarcheComponent
  },
  {
    path:"marche", component:MarcheComponent
  },
  {
    path:"newutilisateur", component:NewutilisateurComponent
  },
  {
    path:"utilisateur", component:UtilisateurComponent
  },
  {
    path:"recouvreur-marche", component:RecouvreurMarcheComponent
  },
  {
    path:"marchand-marche", component:MarchandMarcheComponent
  },

  {
    path:"modmairie/:id", component:UpdatemairieComponent
  },
  {
    path:"", component:AccueilComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
