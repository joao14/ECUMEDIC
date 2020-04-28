import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Data } from '../models/planalim-response';

@Component({
  selector: 'app-almuerzo',
  templateUrl: './almuerzo.page.html',
  styleUrls: ['./almuerzo.page.scss'],
})
export class AlmuerzoPage implements OnInit {
  @ViewChild('slidess', { static: true })
  slides: IonSlides;
  animate: any;
  indexs: string;
  plan: Data;
  constructor() {
    this.plan = JSON.parse(localStorage.getItem('plan-a'));
    this.indexs = 1 + "/" + this.plan.almuerzo.length;
  }

  ngOnInit() {
  }

  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        this.indexs = (index + 1) + "/" + this.plan.almuerzo.length;
        if (index != 0) {
          this.switchAnimates()
        }

        if (index == 6) {
          this.animate = 'animated jackInTheBox'
        }
      })
  }

  switchAnimates() {
    this.animate = "animated pulse"
    setTimeout(() => {
      this.animate = "";
    }, 2000);
  }

}
