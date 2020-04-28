import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Data } from '../models/planalim-response';

@Component({
  selector: 'app-mediat',
  templateUrl: './mediat.page.html',
  styleUrls: ['./mediat.page.scss'],
})
export class MediatPage implements OnInit {
  @ViewChild('slidess', { static: true })
  slides: IonSlides;
  animate: any;
  // public indexs: string = 1 + "/2";
  plan: Data;
  constructor() {
    this.plan = JSON.parse(localStorage.getItem('plan-a'));
  }

  ngOnInit() {
  }

  // onSlideChange() {
  //   this.slides.getActiveIndex()
  //     .then(index => {
  //       this.indexs = (index + 1) + "/2";
  //       console.log('pag. ' + this.indexs);
  //       console.log(index);
  //       if (index != 0) {
  //         this.switchAnimates()
  //       }

  //       if (index == 6) {
  //         this.animate = 'animated jackInTheBox'
  //       }
  //     })
  // }

  // switchAnimates() {
  //   this.animate = "animated pulse"
  //   console.log(this.animate + "beg");
  //   setTimeout(() => {
  //     this.animate = "";
  //     console.log(this.animate + "over");
  //   }, 2000);
  // }
}
