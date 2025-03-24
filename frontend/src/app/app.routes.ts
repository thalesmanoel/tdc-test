import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListaComponent } from './components/lista/lista.component';

export const routes: Routes = [
  {path: "", redirectTo: "principal", pathMatch: 'full'},
  {path: "principal",  component: PrincipalComponent},
  {path: "lista", component: ListaComponent},
];
