import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx'
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject, Observable } from 'rxjs'
import { Platform } from '@ionic/angular';
import { notify } from '../models/notify'
import { notification } from '../models/notification'
import { setup } from '../models/setup'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false)

  notifications$ = new BehaviorSubject([])

  constructor(public platform: Platform, private sqlite: SQLite, public http: HttpClient, public sqlitePorter: SQLitePorter) {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        this.sqlite
          .create({
            name: "ecumedic.db",
            location: "default"
          })
          .then((db: SQLiteObject) => {
            this.database = db
            this.loadDatabase()
          })
      }
    })
  }

  /**
  * Function that load all configurations of the base where it has imported from project
  */
  loadDatabase() {
    this.http
      .get("assets/ecumedic.sql", { responseType: "text" })
      .subscribe(sql => {
        this.sqlitePorter
          .importSqlToDb(this.database, sql)
          .then(_ => {
            this.dbReady.next(true)
          })
          .catch(e => {
            console.log("Error al cargar la BDD")
            console.error(e)
          })
      })
  }

  /**
   * Function that save a new notification
   * @param notify 
   */
  addNotify(data: notify) {
    let obj = [
      data.title,
      data.body,
      data.content,
      data.date,
      '0'
    ]
    return this.database
      .executeSql(
        "INSERT INTO notify (title , body, content, date, status) VALUES (?, ?, ?, ?, ? )",
        obj
      )
      .then(data => {
        console.log('La notificación ha sido ingresada correctemante')
      })
  }


  /**   
   * Function that read all the notifications of the base
   */
  loadNotify(fecha: string) {
    return this.database.executeSql("SELECT * FROM notify WHERE date >= '" + fecha + " 00:00:00' AND date <= '" + fecha + " 23:59:59' ORDER BY date desc", []).then(data => {
      let lstNotify: Array<notification> = []
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {          
          lstNotify.push(
            {
              id: data.rows.item(i).id,
              title: data.rows.item(i).title,
              body: data.rows.item(i).body,
              content: data.rows.item(i).content,
              date: data.rows.item(i).date,
              status: data.rows.item(i).status
            }
          )
        }
      }
      return lstNotify
    })
  }

  /**
   * Function that delete a notification
   * @param notify 
   */
  deleteNotify(notify: notification) {
    return this.database
      .executeSql("DELETE FROM notify WHERE id = ?", [notify.id])
      .then(_ => {
        console.log('Se a eliminado la notificación ' + notify.title)
      }).catch(error => {
        console.log('Error al eliminar la notificación ' + notify.title)
        console.log(error)
      })
  }

  /**
   * Function that updates the status of a notification 
   * @param notify 
   */
  updateNotify(notify: notification) {
    return this.database
      .executeSql("UPDATE notify SET status = ? WHERE id = ?", ['1', notify.id])
      .then(_ => {
        console.log('Se actualizó el estado de la notificación' + notify.title);
      }).catch(error => {
        console.log('Error al actualizar el estado de la notificación ' + notify.title)
        console.log(error)
      })
  }

  /**
   * Function that consult a notification
   * @param id 
   */
  getNotification(id: string) {
    return this.database.executeSql("SELECT * FROM notify WHERE id=? ", [id]).then(data => {
      if (data.rows.length > 0) {
        return {
          id: data.rows.item(0).id,
          title: data.rows.item(0).title,
          body: data.rows.item(0).body,
          content: data.rows.item(0).content,
          date: data.rows.item(0).date,
          status: data.rows.item(0).status
        }
      }
    })
  }


  /**
   * Function that save a new configuration about application
   * @param setup 
   */
  addSetup(setup: setup) {
    let obj = [
      setup.type,
      setup.value
    ]
    return this.database
      .executeSql(
        "INSERT INTO setup (type , value) VALUES (?, ?)",
        obj
      )
      .then(data => {
        console.log('The setup has be created correctly')
      })
  }


  /**
   * Function that updates a configuration of the application
   * @param setup 
   */
  updateSetup(setup: setup) {
    return this.database
      .executeSql("UPDATE setup SET value = ? WHERE id = ?", [setup.value, setup.id])
      .then(_ => {
        console.log('It has updated the configuration' + setup.type);
      }).catch(error => {
        console.log('Not update the configuration ' + setup.type)
        console.log(error)
      })
  }

  /**   
   * Function that read a configutaration 
   */
  getSetup(type: string) {
    return this.database.executeSql("SELECT * FROM setup WHERE type=? ", [type]).then(data => {
      if (data.rows.length > 0) {
        return {
          id: data.rows.item(0).id,
          type: data.rows.item(0).type,
          value: data.rows.item(0).value
        }
      }
    })
  }


  /**
   * Function that saves a new user and allows him to use the app without internet
   * @param patient 
   * @param token 
   * @param divece 
   */
  addUser(patient: any, token: string, divece: string) {
    let obj = [
      patient['dni'],
      patient['name'],
      patient['lastname'],
      patient['email'],
      patient['estacivi'],
      patient['gender'],
      token,
      divece
    ]
    return this.database
      .executeSql(
        "INSERT INTO user (dni , name, lastname, email, estacivi, gender, token, divece) VALUES (? , ? , ? , ? , ? , ? , ? , ?)",
        obj
      )
      .then(data => {
        console.log('The user has be created correctly')
      })

  }

  /**
   * Function that consult a user inside of the base
   * @param dni 
   */
  getUser(dni: string) {
    return this.database.executeSql("SELECT * FROM user WHERE dni=? ", [dni]).then(data => {
      if (data.rows.length > 0) {
        return {
          id: data.rows.item(0).id,
          dni: data.rows.item(0).dni,
          name: data.rows.item(0).name,
          lastname: data.rows.item(0).lastname,
          email: data.rows.item(0).email,
          estacivi: data.rows.item(0).estacivi,
          gender: data.rows.item(0).gender,
          token: data.rows.item(0).token,
          divece: data.rows.item(0).divece
        }
      }
    })
  }


  /**
   * Function that updates the user with a new token and divece
   * @param patient 
   * @param token 
   * @param divece 
   */
  updateUser(patient: any, token: string, divece: string) {
    return this.database
      .executeSql("UPDATE user SET token = ? , divece = ?  WHERE dni = ?", [token, divece, patient['dni']])
      .then(_ => {
        console.log('It has updated the user' + patient.name);
      }).catch(error => {
        console.log('Not update the user ' + patient.name)
        console.log(error)
      })
  }


}
