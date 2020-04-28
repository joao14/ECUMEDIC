import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'findfood', loadChildren: '/findfood/findfood.module#FindfoodPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ], 
  exports: [RouterModule]
})
export class FindClinicRoutingModule { }
