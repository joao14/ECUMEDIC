import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanAlimentosPage } from './plan-alimentos.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

const routes: Routes = [
  {
    path: 'tabs',
    component: PlanAlimentosPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../desayuno/desayuno.module#DesayunoPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../mediam/mediam.module#MediamPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../almuerzo/almuerzo.module#AlmuerzoPageModule'
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../mediat/mediat.module#MediatPageModule'
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: '../cena/cena.module#CenaPageModule'
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/plan-alimentos/tabs/tab1',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanAlimentosPage]
})
export class PlanAlimentosPageModule { }
