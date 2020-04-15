import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AntropometriaPage } from './antropometria.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

const routes: Routes = [
  {
    path: 'tabs',
    component: AntropometriaPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab-ant01/tab-ant01.module#TabAnt01PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab-ant02/tab-ant02.module#TabAnt02PageModule'
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/antropometria/tabs/tab1',
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
  declarations: [AntropometriaPage]
})
export class AntropometriaPageModule { }
