import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";
import {LogeadoComponent} from "./logeado/logeado.component";
import {ClienteComponent} from "./cliente/cliente.component";
import {TransaccionComponent} from "./transaccion/transaccion.component";

const routes: Routes = [
  /* {
     path: 'login',
     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
   },
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   },*/

  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "registrar-usuario", component: RegistroUsuarioComponent},
  {path: "logeado", component: LogeadoComponent},
  {path: "registrar-cliente", component: ClienteComponent},
  {path: "registrar-transaccion", component: TransaccionComponent},
  {
    path: 'navscan',
    loadChildren: () => import('./pages/navscan/navscan.module').then( m => m.NavscanPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
