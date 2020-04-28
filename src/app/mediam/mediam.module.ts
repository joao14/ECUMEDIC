import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MediamPage } from './mediam.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


const routes: Routes = [
  {
    path: '',
    component: MediamPage
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
  declarations: [MediamPage]
})
export class MediamPageModule { }
