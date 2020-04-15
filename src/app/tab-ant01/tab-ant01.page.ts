import { Paciente } from './../models/paciente';
import { Component, OnInit } from '@angular/core';
import { InfoGlobalService } from '../services/info-global.service';

@Component({
  selector: 'app-tab-ant01',
  templateUrl: './tab-ant01.page.html',
  styleUrls: ['./tab-ant01.page.scss'],
})
export class TabAnt01Page implements OnInit {
  paciente = new Paciente();
  constructor(public infog: InfoGlobalService) {
    // this.paciente = this.infog.loginr.data.paciente;
    this.paciente =JSON.parse(localStorage.getItem('lresponse'));
  }

  ngOnInit() {
  }

}
