import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'findfood', loadChildren: './modals/paymentdonemodal/paymentdonemodal.module#PaymentdonemodalPageModule' }
  // { path: 'tab-ant03', loadChildren: './tab-ant03/tab-ant03.module#TabAnt03PageModule' },
  // { path: 'tab1', loadChildren: './tab-ant01/tab-ant01.module#TabAnt01PageModule' },
  // { path: 'tab2', loadChildren: './tab-ant02/tab-ant02.module#TabAnt02PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
