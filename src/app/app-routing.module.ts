import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Removed invalid route as the module './page/ataque/ataque.module' does not exist
  {
    path: 'ataque',
    loadChildren: () => import('./ataque/ataque.module').then( m => m.AtaquePageModule)
  },
  {
    path: 'ataque',
    loadChildren: () => import('./ataque/ataque.module').then( m => m.AtaquePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
