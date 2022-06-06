import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['welcome']);
const redirectLoggedInToList = () => redirectLoggedInTo(['usuario']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'fav',
    loadChildren: () => import('./pages/fav/fav.module').then( m => m.FavPageModule),
    canActivate: [AuthGuard],
    data:{authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule),
    canActivate: [AuthGuard],
    data:{authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToList }
  },
  {
    path: 'routines',
    loadChildren: () => import('./pages/routines/routines.module').then( m => m.RoutinesPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'registro-rutinas',
    loadChildren: () => import('./pages/registro-rutinas/registro-rutinas.module').then( m => m.RegistroRutinasPageModule)
  },
  {
    path: 'rutina-detail/:id',
    loadChildren: () => import('./pages/rutina-detail/rutina-detail.module').then( m => m.RutinaDetailPageModule)
  },

  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
