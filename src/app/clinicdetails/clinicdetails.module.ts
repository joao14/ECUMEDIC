import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClinicdetailsPage } from './clinicdetails.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

const routes: Routes = [
  {
    path: '',
    component: ClinicdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClinicdetailsPage]
})
export class ClinicdetailsPageModule { }
