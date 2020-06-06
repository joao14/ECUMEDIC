import { Component, NgModule } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { AlertController } from '@ionic/angular'

import { FCM } from '@ionic-native/fcm/ngx'
import { FcmService } from './services/fcm.service'
import { notify } from './models/notify'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  navigate: any;
  today: Date;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private fcm: FCM,
    public alertController: AlertController,
    public notificador: FcmService,
    public datepipe: DatePipe
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('android')) {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#00acba');
        this.getFCM('Android')
      }

      if (this.platform.is('ios')) {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#00acba');
        this.getFCM('IOS')
      }

    });
  }

  /**
   * Funcion para validar FCM
   */
  getFCM(platform: string) {
    console.log("Iniciando el proceso de notificaciones para la APP");
    this.fcm.getToken().then(token => {
      this.setInformation(token, platform)
    })
    this.fcm.onNotification().subscribe(data => {
      console.log('NOTIFICACIONESsss....')      
      if (data.wasTapped) {    
        console.log('Se ha enviado mediante background')        
        //this.presentAlert("Received in background")
        this.sendNotification(data)  
      } else {     
        console.log('Se ha enviado mediante foreground')        
        //this.presentAlert("Received in foreground")
        this.sendNotification(data)  
      };
    }, error => {
      console.error("Error en configurar las notificaciones de la app ", error)
    })
    this.fcm.onTokenRefresh().subscribe(token => {
      this.setInformation(token, platform)  
    });
  }

  sendNotification(data: any) {   
    console.log('CONVIRTIENDO::: ');    
    let fecha=this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
    console.log(fecha)   
    let temp: notify = {
      title: data.title,
      body: data.body,
      content: data.content,
      date: fecha
    }  
    this.notificador.setNotificationObs(temp)
  }   

  sideMenu() {
    this.navigate =
      [
        {
          title: "Inicio",
          url: "/home",
          icon: "home"
        },
        {
          title: "Contacto",
          url: "/docdetails",
          icon: "contacts"
        },
        {
          title: "Configuración",
          url: "/notifysetup",
          icon: "settings"
        }
      ]
  }

  async presentAlert(sms: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: sms,
      buttons: ['OK']
    });

    await alert.present();
  }

  setInformation(token: string, platform: string) {
    let temp = {
      platform: platform,
      token: token
    }
    localStorage.setItem("info", JSON.stringify(temp))
    console.log("ESTE ES EL TOKEN => " + token)
  }

}

