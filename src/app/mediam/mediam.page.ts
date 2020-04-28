import { Component, OnInit } from '@angular/core';
// import { IonSlides } from '@ionic/angular';
import { Data } from '../models/planalim-response';

@Component({
  selector: 'app-mediam',
  templateUrl: './mediam.page.html',
  styleUrls: ['./mediam.page.scss'],
})
export class MediamPage implements OnInit {
  // @ViewChild('slidess', { static: true })
  // @ViewChild('slidesd', { static: true })
  // slides: IonSlides;
  // slided: IonSlides;
  // animate: any;
  /** Obtener size del array de desayubos*/
  // public indexs: string;
  // public indexd: string;
  plan: Data;
  constructor() {
    this.plan = JSON.parse(localStorage.getItem('plan-a'));
    // this.indexs = 1 + "/" + this.plan.mm.length;
    // this.indexd = 1 + "/" + this.plan.mt.length;
  }

  ngOnInit() {
  }

  // onSlideChange() {
  //   this.slides.getActiveIndex()
  //     .then(index => {
  //       this.indexs = (index + 1) + "/" + this.plan.mm.length;;
  //       if (index != 0) {
  //         this.switchAnimates()
  //       }

  //       if (index == 6) {
  //         this.animate = 'animated jackInTheBox'
  //       }
  //     })
  // }

  // onSlideChanged() {
  //   this.slided.getActiveIndex()
  //     .then(index => {
  //       this.indexd = (index + 1) + "/" + this.plan.mt.length;
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
