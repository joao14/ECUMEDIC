import { Component, NgModule } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
      }
    });
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
          title: "Chat",
          url: "/chat",
          icon: "chatboxes"
        },
        {
          title: "Contacto",
          url: "/docdetails",
          icon: "contacts"
        },
      ]
  }
}
