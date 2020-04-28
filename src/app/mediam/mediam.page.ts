import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-mediam',
  templateUrl: './mediam.page.html',
  styleUrls: ['./mediam.page.scss'],
})
export class MediamPage implements OnInit {
  @ViewChild('slidess', { static: true })
  slides: IonSlides;
  animate: any;
  /** Obtener size del array de desayubos*/
  public indexs: string = 1 + "/2";

  constructor() { }

  ngOnInit() {
  }

  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        this.indexs = (index + 1) + "/2";
        console.log('pag. ' + this.indexs);
        console.log(index);
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
    console.log(this.animate + "beg");
    setTimeout(() => {
      this.animate = "";
      console.log(this.animate + "over");
    }, 2000);
  }

}
