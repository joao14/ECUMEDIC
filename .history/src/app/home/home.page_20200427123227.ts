import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfoGlobalService } from '../services/info-global.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paciente = new Paciente();
  constructor(public navCtrl: NavController, public infog: InfoGlobalService) {
    this.paciente =JSON.parse(localStorage.getItem('lresponse'));
  }

  ionViewDidEnter() {

  }

  goFindaDoctor() {
    this.navCtrl.navigateForward('finddoct');
  }

  goFindaHospital() {
    this.navCtrl.navigateForward('findhospital');
  }

  goFindaClinic() {
    this.navCtrl.navigateForward('findclinic');
  }

  goFindaPharmacy() {
    this.navCtrl.navigateForward('antropometria');
  }

  goDocList() {
    this.navCtrl.navigateForward('docdetails');
  }

  goDrugFindDdrugs() {
    this.navCtrl.navigateForward('finddrug')
  }
}
