import { PlanrecoPageModule } from './modals/planreco/planreco.module';
import { VideocallPageModule } from './modals/videocall/videocall.module';
import { CalldocmodalPageModule } from './modals/calldocmodal/calldocmodal.module';
import { PaymentdonemodalPageModule } from './modals/paymentdonemodal/paymentdonemodal.module';
import { SignupdonemodalPageModule } from './modals/signupdonemodal/signupdonemodal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { CallNumber } from '@ionic-native/call-number/ngx';
// import { Chart } from 'chart.js';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SignupdonemodalPageModule,
    PaymentdonemodalPageModule,
    CalldocmodalPageModule,
    VideocallPageModule,
    PlanrecoPageModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
    // library.addIcons(faCoffee);
  }

}
