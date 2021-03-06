import { Component, OnInit } from '@angular/core';
import { NavController, Platform, LoadingController } from '@ionic/angular';
import { Credencial } from '../models/credencial';
import { LoginResponse } from '../models/login-response'
import { Paciente } from '../models/paciente'
import { EmapiService } from '../services/emapi.service'
import { DatabaseService } from '../services/database.service'
import { InfoGlobalService } from '../services/info-global.service'
import { NotificationService } from '../services/crud/notification.service';
import { InfoNotification } from '../models/infoNotification';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credencial = new Credencial();
  lresponse: LoginResponse;

  constructor(public navCtrl: NavController, public platform: Platform, public emApiService: EmapiService,
    public infog: InfoGlobalService, public loadingCtrl: LoadingController, public base: DatabaseService,
    public notifyService: NotificationService) {

  }

  ngOnInit() {
    console.log('Consultando el JSON')
    console.log(JSON.parse(localStorage.getItem('info')))
  }

  signUp() {
    this.navCtrl.navigateForward('signup');
  }

  signIn() {
    // var loader = this.loadingCtrl.create({
    //   message: 'Espere por favor ...',
    //   spinner: 'circles'
    // }).then(a => {
    //   a.present().then(() => {
    //     console.log('loading presented');
    //     /*if (!this.isLoading) {
    //       a.dismiss().then(() => console.log('abort laoding'));
    //     }*/
    //   });  
    // });


    /**Only for test */
    this.credencial.user = 'david_toscano@outlook.com';
    this.credencial.pass = '1717034977';
    // let dre = '{"headerApp":{"code":0,"message":"Succesfully"},"data":{"paciente":{"profession":"INGENIERO EN SISTEMAS","gender":"F","mme":0,"mcadera":0,"icc":0,"birth":528526800000,"photo":"emis-24xx.png","weight":15,"dateregi":1584204787576,"nextdate":"","pgc":0,"estacivi":"C","lastname":"MORÁN ESPÍN","mcintura":0,"size":1.32,"name":"PATRICIA CAROLINA","ages":{"years":33,"months":6,"days":7,"zero":false,"negative":false,"chronology":{"id":"ISO","calendarType":"iso8601"},"units":["YEARS","MONTHS","DAYS"]},"email":"patycaro86@hotmail.com","imc":8.61},"token":"eyJhbGciOiJIUzI1NiJ9.eyJyb2wiOiJhLGIsYyIsInN1YiI6IjIwSzA3MCM0JiIsImlzcyI6IksyMDA3IyIsImlhdCI6MTU4NjM4NDU2NCwiZXhwIjoxNTg2Mzg4MTY0fQ.w0uFGAJ1n_TRTqkwxrHyCU3TqElyngdxBMjRJsG0qwQ"}}';
    // this.infog.loginr = JSON.parse(dre);
    // localStorage.setItem('lresponse', JSON.stringify(this.infog.loginr.data.paciente));
    // let drs = '{"headerApp": {"code": 200,"message": "Succesfully"},"data": {"tallas": {"20/03/27": 1.3,"20/04/06": 1.32,"20/04/15": 1.32,"20/03/14": 1.25,"20/03/30": 1.31 },"imcs": {"20/03/27": 17.79,"20/04/06": 17.22, "20/04/15": 20.09, "20/03/14": 19.23, "20/03/30": 15.44 }, "pesos": { "20/03/27": 30.99, "20/04/06": 30, "20/04/15": 35, "20/03/14": 33, "20/03/30": 26.9 }, "pcgs": { "20/03/27": 0, "20/04/06": 2, "20/04/15": 0, "20/03/14": 4, "20/03/30": 3 }, "mmes": { "20/03/27": 0, "20/04/06": 0, "20/04/15": 0, "20/03/14": 1, "20/03/30": 2 }}}';
    // let serie: SeriesResponse;
    // serie = JSON.parse(drs);
    // localStorage.setItem('series', JSON.stringify(serie.data));
    // this.navCtrl.navigateRoot('home');
    // return;
    /** ens Only for test */

    console.log(JSON.stringify(this.credencial));
    // 0.0 Call Login
    this.emApiService.callLogin(this.credencial).subscribe((response) => {

      if (response.headerApp.code === 200) {
        //Guardamos el token del usuario
        localStorage.setItem("token", response.data.token)
        this.infog.loginr = response;
        localStorage.setItem('lresponse', JSON.stringify(response.data.paciente));
        //se va a guardar el en localstorage
        this.setInformationUser(response.data.paciente)
        // 1.0 Call Series
        this.emApiService.callSeries(this.credencial.pass, response.data.token).subscribe((rseries) => {
          if (rseries.headerApp.code === 200) {
            localStorage.setItem('series', JSON.stringify(rseries.data));
          } else {
            /** Presentar mensaje de error */
            console.log('Error call series');
          }
        });

        if (response.data.paciente.lastconsid) {
          // 2.0 Call Tabla Alimentos
          this.emApiService.callTableFood(response.data.paciente.lastconsid, response.data.token).subscribe((rtf) => {
            if (rtf.headerApp.code === 200) {
              localStorage.setItem('tabla-a', JSON.stringify(rtf.data));
            } else {
              /** Presentar mensaje de error */
              console.log('Error call table');
            }
          });

          // 3.0 Call Plan Alimentos
          this.emApiService.callPlanFood(response.data.paciente.lastconsid, response.data.token).subscribe((rpf) => {
            if (rpf.headerApp.code === 200) {
              localStorage.setItem('plan-a', JSON.stringify(rpf.data));
            } else {
              /** Presentar mensaje de error */
              console.log('Error call plan');
            }
          });
        } else {
          localStorage.setItem('tabla-a', null);
          localStorage.setItem('plan-a', null);
        }
        this.navCtrl.navigateRoot('home');
      } else {
        /** Presentar mensaje de error */
        console.log('Error autenticación');
      }
    });

  }

  setInformationUser(data: any) {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        let obj = {
          dni: data['dni'],
          name: data['name'],
          lastname: data['lastname'],
          email: data['email'],
          estacivi: data['estacivi'],
          gender: data['gender']
        }
        let infoNotification: InfoNotification = {
          notiFcmtoken: JSON.parse(localStorage.getItem('info')).token,
          notiGroup: "FOOD",
          notiStatus: true,
          notiFechregi: null,
          notiFechactu: null,
          notiDevice: JSON.parse(localStorage.getItem('info')).platform,
          dniPerson: data['dni']
        }
        this.base.getUser(data['dni']).then((data) => {
          if (data == undefined) {
            this.base.addUser(obj, JSON.parse(localStorage.getItem('info')).token, JSON.parse(localStorage.getItem('info')).platform).
              then(_ => {
                console.log('Insert Succesfull')
                this.notifyService.callAddInfoNotification(infoNotification, localStorage.getItem("token")).subscribe(data => {
                  if (data['headerApp'].code == 200) {
                    console.log('Insert in API WEB sucessfull')
                  }
                }, error => {
                  console.log('Error al insertar la información del usuario')
                })
              })
          }
        })
      }
    })

  }

}
