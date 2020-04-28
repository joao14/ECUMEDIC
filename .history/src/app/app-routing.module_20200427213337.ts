import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signupdonemodal', loadChildren: './modals/signupdonemodal/signupdonemodal.module#SignupdonemodalPageModule' },
  { path: 'finddoct', loadChildren: './finddoct/finddoct.module#FinddoctPageModule' },
  { path: 'findhospital', loadChildren: './findhospital/findhospital.module#FindhospitalPageModule' },
  { path: 'findclinic', loadChildren: './findclinic/findclinic.module#FindclinicPageModule' },
  { path: 'doctorlist', loadChildren: './doctorlist/doctorlist.module#DoctorlistPageModule' },
  { path: 'docmap', loadChildren: './docmap/docmap.module#DocmapPageModule' },
  { path: 'docdetails', loadChildren: './docdetails/docdetails.module#DocdetailsPageModule' },
  { path: 'hospdetails', loadChildren: './hospdetails/hospdetails.module#HospdetailsPageModule' },
  { path: 'clinicdetails', loadChildren: './clinicdetails/clinicdetails.module#ClinicdetailsPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'calldocmodal', loadChildren: './modals/calldocmodal/calldocmodal.module#CalldocmodalPageModule' },
  { path: 'videocall', loadChildren: './modals/videocall/videocall.module#VideocallPageModule' },
  { path: 'finddrug', loadChildren: './finddrug/finddrug.module#FinddrugPageModule' },
  { path: 'drugdetails', loadChildren: './drugdetails/drugdetails.module#DrugdetailsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'paymentdonemodal', loadChildren: './modals/paymentdonemodal/paymentdonemodal.module#PaymentdonemodalPageModule' },
  { path: 'antropometria', loadChildren: './antropometria/antropometria.module#AntropometriaPageModule' },  { path: 'findfood', loadChildren: './findclinic/findfood/findfood.module#FindfoodPageModule' },

<<<<<<< HEAD
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
=======
const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signupdonemodal', loadChildren: './modals/signupdonemodal/signupdonemodal.module#SignupdonemodalPageModule' },
  { path: 'finddoct', loadChildren: './finddoct/finddoct.module#FinddoctPageModule' },
  { path: 'findhospital', loadChildren: './findhospital/findhospital.module#FindhospitalPageModule' },
  { path: 'findclinic', loadChildren: './findclinic/findclinic.module#FindclinicPageModule' },
  { path: 'doctorlist', loadChildren: './doctorlist/doctorlist.module#DoctorlistPageModule' },
  { path: 'docmap', loadChildren: './docmap/docmap.module#DocmapPageModule' },
  { path: 'docdetails', loadChildren: './docdetails/docdetails.module#DocdetailsPageModule' },
  { path: 'hospdetails', loadChildren: './hospdetails/hospdetails.module#HospdetailsPageModule' },
  { path: 'clinicdetails', loadChildren: './clinicdetails/clinicdetails.module#ClinicdetailsPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'calldocmodal', loadChildren: './modals/calldocmodal/calldocmodal.module#CalldocmodalPageModule' },
  { path: 'videocall', loadChildren: './modals/videocall/videocall.module#VideocallPageModule' },
  { path: 'finddrug', loadChildren: './finddrug/finddrug.module#FinddrugPageModule' },
  { path: 'drugdetails', loadChildren: './drugdetails/drugdetails.module#DrugdetailsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'paymentdonemodal', loadChildren: './modals/paymentdonemodal/paymentdonemodal.module#PaymentdonemodalPageModule' },
  { path: 'antropometria', loadChildren: './antropometria/antropometria.module#AntropometriaPageModule' },
  { path: 'plan-alimentos', loadChildren: './plan-alimentos/plan-alimentos.module#PlanAlimentosPageModule' },
  // { path: 'desayuno', loadChildren: './desayuno/desayuno.module#DesayunoPageModule' },
  // { path: 'mediam', loadChildren: './mediam/mediam.module#MediamPageModule' },
  // { path: 'mediat', loadChildren: './mediat/mediat.module#MediatPageModule' },
  // { path: 'almuerzo', loadChildren: './almuerzo/almuerzo.module#AlmuerzoPageModule' },
  // { path: 'cena', loadChildren: './cena/cena.module#CenaPageModule' },
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
>>>>>>> 2ee8845a9d384bd253cb654fe194ec8b76a4ff66
