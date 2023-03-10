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
  },
  {
    path: 'detalle-consulta',
    loadChildren: () => import('./pages/detalle-consulta/detalle-consulta.module').then( m => m.DetalleConsultaPageModule)
  },
  {
    path: 'historias-clinicas',
    loadChildren: () => import('./pages/web/historias-clinicas/historias-clinicas.module').then( m => m.HistoriasClinicasPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./pages/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/web/agenda/agenda.module').then((m) => m.AgendaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
