import { RippleLoaderComponent } from './ripple-loader/ripple-loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    RippleLoaderComponent,
  ],
  providers: [],
  exports: [
    RippleLoaderComponent
  ]
})

export class SharedModule {}
