import { Component, OnInit } from '@angular/core';

export interface Ingredients {
  meter: string,
  type: string[]
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
            aliment: "Arroz",
            ingredients: [
              {
                meter: "1TZ",
                type: [
                  { "Azucar"},
                  { "Azucar dos"}
                ]
              },
              {
                meter: "2LB",
                type: [
                  { "Prueba 1"},
                  { "Prueba 2"},
                  { "Prueba 3"}
                ]
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
