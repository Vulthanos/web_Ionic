import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['initio']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['profile']);

const routes: Routes = [
  {
    path: 'initio',
    loadChildren: () =>
      import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToProfile)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/singup/singup.module').then( m => m.SingupPageModule),
    ...canActivate(redirectLoggedInToProfile)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },

  {
    path: 'product-details',
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () =>
      import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
