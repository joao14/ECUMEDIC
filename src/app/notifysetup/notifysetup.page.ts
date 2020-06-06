import { Component, OnInit } from '@angular/core'
import { Platform, NavController, AlertController } from '@ionic/angular'
import { DatabaseService } from '../services/database.service'
import { setup } from '../models/setup'
import { InfoNotification } from '../models/infoNotification'
import { NotificationService } from '../services/crud/notification.service'

@Component({
  selector: 'app-notifysetup',
  templateUrl: './notifysetup.page.html',
  styleUrls: ['./notifysetup.page.scss'],
})
export class NotifysetupPage implements OnInit {

  status: boolean = true
  setup: setup

  constructor(private platform: Platform, private base: DatabaseService, public notifyService: NotificationService, public alertController: AlertController) { }


  ngOnInit() {   
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        this.getConfiguration()
      }
    })
  }

  getConfiguration() {
    this.base.getSetup("NOTIFY").then(data => {
      console.log('DATA')
      console.log(data)
      if (data != undefined) {
        this.status = data.value == '1' ? true : false
        this.setup = data
      }
    })
  }

  stateChange(event) {   
    this.setup.value = event.detail.checked ? "1" : "0"
    console.log(this.setup);    
    this.base.updateSetup(this.setup).then(() => {
      console.log("Update Sussesfull")
      //Cambiamos el estado de las notificaciones
      this.changeStatusNotification(this.setup)
    })
  }

  changeStatusNotification(setup: setup) {
    let dni = JSON.parse(localStorage.getItem('lresponse')).dni;
    this.base.getUser(dni).then(data => {
      if (data != undefined) {
        let infoNotification: InfoNotification = {
          notiFcmtoken: JSON.parse(localStorage.getItem('info')).token,
          notiGroup: "FOOD",
          notiStatus: setup.value == "1" ? true : false,
          notiFechregi: null,
          notiFechactu: null,
          notiDevice: JSON.parse(localStorage.getItem('info')).platform,
          dniPerson: dni
        }
        this.notifyService.callUpdateInfoNotification(infoNotification, localStorage.getItem("token")).subscribe(data => {
          if (data['headerApp'].code == 200) {
            console.log('Updates status of silent notificaations in API WEB sucessfull')
            //this.presentAlert(setup.value == "1" ? "Notificaciones activas" : "Notificaciones silenciadas")
          }
        }, error => {
          console.log('Error al actualizar la información del usuario')
        })
      }
    })
  }

  async presentAlert(sms: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Configuraciones',
      subHeader: 'La configuración se ha cambiando.',
      message: sms,
      buttons: ['OK']
    });
    await alert.present();
  }


}
