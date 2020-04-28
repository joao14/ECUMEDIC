import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Data } from '../models/tablealim-response';
import { Paciente } from '../models/paciente';

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

  tabla: Map<string, boolean>;
  recoacl: string;
  recoazu: string;
  recocar: string;
  recofru: string;
  recogra: string;
  recolac: string;
  recover: string;
  constructor() {
    let tb: Data = JSON.parse(localStorage.getItem('tabla-a'));
    this.tabla = tb.table;
    let paciente: Paciente = JSON.parse(localStorage.getItem('lresponse'));
    this.recoacl = paciente.recoacl;
    this.recoazu = paciente.recoazu;
    this.recocar = paciente.recocar;
    this.recofru = paciente.recofru;
    this.recogra = paciente.recogra;
    this.recolac = paciente.recolac;
    this.recover = paciente.recover;
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
