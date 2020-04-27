import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.page.html',
  styleUrls: ['./desayuno.page.scss'],
})
export class DesayunoPage implements OnInit {
  @ViewChild('slidess', { static: true })
  slides: IonSlides;
  animate: any;
  /** Obtener size del array de desayubos*/
  public indexs: string = 1 + "/2";
  desayuno: { lacteo: string, almidon: string, carnico: string, fruta: string, verdura: string, grasa: string, media: string }[] = [
    { "lacteo": "1 taza de leche", "almidon": "1 pan integral", "carnico": "2 rodajas de queso", "fruta": "2 frutas", "verdura": null, "grasa": null, "media": null },
    { "lacteo": "1 taza de yogurt", "almidon": "1/2 pan", "carnico": "1 huevo", "fruta": "2 frutas", "verdura": null, "grasa": null, "media": null },
  ];
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
