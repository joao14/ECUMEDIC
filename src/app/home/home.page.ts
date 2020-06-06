import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfoGlobalService } from '../services/info-global.service';
import { Paciente } from '../models/paciente';
import { notification } from '../models/notification'
import { FcmService } from '../services/fcm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  suscriptor: Subscription 
  paciente = new Paciente();
  contador: number = 0

  constructor(public navCtrl: NavController, public infog: InfoGlobalService, public fcm: FcmService) {
    this.paciente = JSON.parse(localStorage.getItem('lresponse'));
  }

  ngOnInit() {
    console.log('Ingresando..');            
               
    this.suscriptor = this.fcm.geNotificationObs().subscribe((notify) => {
      if (notify != null)
        this.contador++
    })
  }

  ngOnDestroy() {
    this.suscriptor.unsubscribe()
  }

  ionViewDidEnter() { }

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

  getNotification() {
    this.contador = 0
    this.navCtrl.navigateForward('notifications')
  }



}
