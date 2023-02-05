import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-medico',
    loadChildren: () => import('./pages/web/registro-medico/registro-medico.module').then( m => m.RegistroMedicoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/movil/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil-dermatologico',
    loadChildren: () => import('./pages/movil/perfil-dermatologico/perfil-dermatologico.module').then( m => m.PerfilDermatologicoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
