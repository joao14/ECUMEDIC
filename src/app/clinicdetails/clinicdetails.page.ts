import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-clinicdetails',
  templateUrl: './clinicdetails.page.html',
  styleUrls: ['./clinicdetails.page.scss'],
})
export class ClinicdetailsPage implements OnInit {
  @ViewChild('slidess', { static: true })
  slides: IonSlides;
  animate: any;
  public indexs: string = 1 + "/7";
  public taal = new Map();

  constructor() {
    this.taal.set('0100', true);
    this.taal.set('0101', false);

  }

  ngOnInit() {
  }

  schedule() {
    console.log("scheduled");
  }

  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        this.indexs = (index + 1) + "/7";
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
