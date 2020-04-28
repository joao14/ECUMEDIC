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
  food: Array<Food> = [],
  observation: string
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
                types: ["Soya","Arveja o Judías","Frejol","Haba","Chocho","Habichuelas","Quinoa","Mote","Arroz","Fideo","Yuca","Camote"]
              },
              {
                meter: "1/4 taza",
                types: ["Garbanzo","Lenteja","Prueba 3"]
              },
              {
                meter: "2 cdas",
                types: ["Granola","Germen de trigo","Avena","Harinas"]
              },
              {
                meter: "1 tz",
                types: ["Canguil"]
              },
              {
                meter: "1 rda",
                types: ["Pan de molde integral","Pan de molde blanco"]
              }
            ]  
          }
        ],
        observation: 'Prueba de datos ABC'
      },
      {
        title: "Cárnicos",
        food: [
          {
            aliment: "Arroz",
            ingredients: [
              {   
                meter: "1 tz",
                types: ["Azucar","Azucar dos"]
              },
              {
                meter: "2 lb",
                types: ["Prueba 1","Prueba 2","Prueba 3"]
              }
            ]  
          }
        ],
        observation: ''
      },
      {
        title: "Verduras",
        food: [
          {
            aliment: "Champiñones",
            ingredients: []           
          },
          {
            aliment: "Rabanos",
            ingredients: []  
          },
          {
            aliment: "Vainitas",
            ingredients: []  
          },
          {
            aliment: "Nabo",
            ingredients: []  
          }
        ],
        observation: ''
      }
    ]
    console.log("DATOS DE PRUEBA")
    console.log(this.foods)

  }

}
