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
  },
  {
    path: 'crear-consulta',
    loadChildren: () => import('./pages/movil/crear-consulta/crear-consulta.module').then( m => m.CrearConsultaPageModule)
  },
  {
    path: 'cuerpo',
    loadChildren: () => import('./pages/movil/cuerpo/cuerpo.module').then( m => m.CuerpoPageModule)
  },
  {
    path: 'casos-medicos',
    loadChildren: () => import('./pages/web/casos-medicos/casos-medicos.module').then( m => m.CasosMedicosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
