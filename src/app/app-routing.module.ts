import { HomeComponent } from './main/home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./main/auth/auth.module').then(mod => mod.AuthModule)},
  { path: 'usuario', loadChildren: () => import('./main/usuario/usuario.module').then(mod => mod.UsuarioModule)},
  { path: 'artefacto', loadChildren: () => import('./main/artefacto/artefacto.module').then(mod => mod.ArtefactoModule)},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }