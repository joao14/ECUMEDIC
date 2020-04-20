import { Component, OnInit } from '@angular/core';
//import { Paciente } from '../models/paciente';
import { InfoGlobalService } from '../services/info-global.service';

@Component({
  selector: 'app-tab-ant02',
  templateUrl: './tab-ant02.page.html',
  styleUrls: ['./tab-ant02.page.scss'],
})
export class TabAnt02Page implements OnInit {

  //paciente = new Paciente();
  constructor(public infog: InfoGlobalService) {
    // this.paciente = this.infog.loginr.data.paciente;
    // this.paciente = JSON.parse(localStorage.getItem('lresponse'));
    this.infog.reload();
    this.infog.loginr.data.paciente = JSON.parse(localStorage.getItem('lresponse'));

  }

  ngOnInit() {
    console.log('Enter tab 2');
    this.infog.getCategoriaIMC(this.infog.getCategoriaPersona(this.infog.loginr.data.paciente.ages.years, this.infog.loginr.data.paciente.ages.days), this.infog.loginr.data.paciente.imc);
    console.log('Exit tab 2');
    console.log(this.infog.imc_name);
  }

  ionViewDidEnter() {

  }



}
