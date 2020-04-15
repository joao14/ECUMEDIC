import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabAnt01Page } from './tab-ant01.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

const routes: Routes = [
  {
    path: '',
    component: TabAnt01Page
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
  declarations: [TabAnt01Page]
})
export class TabAnt01PageModule {}
