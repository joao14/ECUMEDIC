import { Component, OnInit } from '@angular/core';

export interface Ingredients {
  meter: string,
  type: Array<string> = []
}

export interface Food {
  aliment: string,
  ingredients: Array<Ingredients> = []
}

export interface Foods {
  title: string,
  food: Array<Food> = []
}

export interface test {
  uno: string,
  dos: string
}

@Component({
  selector: 'app-findfood',
  templateUrl: './findfood.page.html',
  styleUrls: ['./findfood.page.scss'],
})
export class FindfoodPage implements OnInit {

  public foods: Array<Food> = [];
  tests: Array<test>;

  constructor() { }

  ngOnInit() {
    this.geData()
  }

  geData() {
    this.tests = [
      {
        uno: "Hola",
        dos: "Gracias"
      }
    ]
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
    console.log(this.tests)
    console.log(this.foods)

  }

}
