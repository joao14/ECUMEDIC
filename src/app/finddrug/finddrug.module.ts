import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FinddrugPage } from './finddrug.page';
// import { NgCalendarModule } from 'ionic2-calendar';


const routes: Routes = [
  {
    path: '',
    component: FinddrugPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    // NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinddrugPage]
})
export class FinddrugPageModule { }
