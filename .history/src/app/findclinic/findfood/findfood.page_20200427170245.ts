import { Component, OnInit } from '@angular/core';

export interface Ingredients {
  meter: string,
  types: Array<string> = []
}

export interface Food {
  aliment: string,
  ingredients: Array<Ingredients> = []
}

export interface Foods {
  title: string,
  food: Array<Food> = []
}

@Component({
  selector: 'app-findfood',
  templateUrl: './findfood.page.html',
  styleUrls: ['./findfood.page.scss'],
})
export class FindfoodPage implements OnInit {

  public foods: Array<Food> = [];

  constructor() { }

  ngOnInit() {
    this.geData()
  }

  geData() {
    this.foods = [
      {
        title: "Almidones, Cereales y Legumbres",
        food: [
          {
            aliment: "",
            ingredients: [ 
              {   
                meter: "1/2 taza",
                type: ["Soya","Arveja o Judías","Frejol","Haba","Chocho","Habichuelas","Quinoa","Mote","Arroz","Fideo","Yuca","Camote"]
              },
              {
                meter: "1/4 taza",
                type: ["Garbanzo","Lenteja","Prueba 3"]
              },
              {
                meter: "2 cdas",
                type: ["Granola","Germen de trigo","Avena","Harinas"]
              },
              {
                meter: "1 tz",
                type: ["Canguil"]
              },
              {
                meter: "1 rda",
                type: ["Pan de molde integral","Pan de molde blanco"]
              }
            ]  
          }
        ]
      },
      {
        title: "Cárnicos",
        food: [
          {
            aliment: "Arroz",
            ingredients: [
              {   
                meter: "1TZ",
                type: ["Azucar","Azucar dos"]
              },
              {
                meter: "2LB",
                type: ["Prueba 1","Prueba 2","Prueba 3"]
              }
            ]  
          }
        ]
      }
    ]
    console.log("DATOS DE PRUEBA")
    console.log(this.foods)

  }

}
