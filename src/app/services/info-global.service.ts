import { DataLogin } from './../models/login-response';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/login-response';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class InfoGlobalService {

  public loginr: LoginResponse;
  /** IMC */
  public img_imc: string = '';
  public imc_name: string = '';
  public cat_person: string = '';
  /** PESO */
  public peso_min: number = 0.00;
  public peso_max: number = 0.00;
  public peso_ideal: number = 0.00;

  /** DIFF PESO */
  public diff_peso_min: number = 0.00;
  public diff_peso_max: number = 0.00;
  public diff_peso_ideal: number = 0.00;

  /** RANGO IMC ADULTOS */
  RANGOIMCADULTO: { vmin: number, vmax: number, name: string, image: string }[] = [
    { "vmin": -1000.00, "vmax": 18.40, "name": "PESO INSUFICIENTE", "image": "imc/{$}/{$}1.png" },
    { "vmin": 18.50, "vmax": 24.90, "name": "NORMO PESO", "image": "imc/{$}/{$}2.png" },
    { "vmin": 25.00, "vmax": 26.90, "name": "SOBREPESO I", "image": "imc/{$}/{$}3.png" },
    { "vmin": 27.00, "vmax": 29.90, "name": "SOBREPESO II", "image": "imc/{$}/{$}4.png" },
    { "vmin": 30.00, "vmax": 34.90, "name": "OBESIDAD I", "image": "imc/{$}/{$}4.png" },
    { "vmin": 35.00, "vmax": 39.90, "name": "OBESIDAD II", "image": "imc/{$}/{$}5.png" },
    { "vmin": 40.00, "vmax": 49.90, "name": "OBESIDAD III", "image": "imc/{$}/{$}5.png" },
    { "vmin": 50.00, "vmax": 1000.00, "name": "OBESIDAD IV", "image": "imc/{$}/{$}6.png" }
  ];

  /** RANGO PESO IDEAL ADULTOS Y ADULTOS MAYORES FEMENINO */
  RPESOIDEAL_F: { genero: string, edad_ini: number, edad_fin: number, p_min: number, p_max: number, p_ideal: number }[] = [
    { "genero": 'F', "edad_ini": 20, "edad_fin": 34, "p_min": 20.00, "p_max": 25.00, "p_ideal": 22.00 },
    { "genero": 'F', "edad_ini": 35, "edad_fin": 44, "p_min": 21.00, "p_max": 26.00, "p_ideal": 23.00 },
    { "genero": 'F', "edad_ini": 45, "edad_fin": 54, "p_min": 22.00, "p_max": 27.00, "p_ideal": 24.00 },
    { "genero": 'F', "edad_ini": 55, "edad_fin": 64, "p_min": 23.00, "p_max": 28.00, "p_ideal": 25.00 },
    { "genero": 'F', "edad_ini": 64, "edad_fin": 200, "p_min": 24.00, "p_max": 29.00, "p_ideal": 26.00 }
  ];

  /** RANGO PESO IDEAL ADULTOS Y ADULTOS MAYORES HOMBRES */
  RPESOIDEAL_M: { genero: string, edad_ini: number, edad_fin: number, p_min: number, p_max: number, p_ideal: number }[] = [
    { "genero": 'M', "edad_ini": 20, "edad_fin": 34, "p_min": 20.00, "p_max": 25.00, "p_ideal": 23.00 },
    { "genero": 'M', "edad_ini": 35, "edad_fin": 44, "p_min": 21.00, "p_max": 26.00, "p_ideal": 24.00 },
    { "genero": 'M', "edad_ini": 45, "edad_fin": 54, "p_min": 22.00, "p_max": 27.00, "p_ideal": 25.00 },
    { "genero": 'M', "edad_ini": 55, "edad_fin": 64, "p_min": 23.00, "p_max": 28.00, "p_ideal": 26.00 },
    { "genero": 'M', "edad_ini": 64, "edad_fin": 200, "p_min": 24.00, "p_max": 29.00, "p_ideal": 27.00 }
  ];


  constructor() {
    this.loginr = new LoginResponse();
  }

  public reload() {
    this.loginr = new LoginResponse();
    this.loginr.data = {
      paciente: new Paciente(),
      token: null,
    }
    console.log('Reload');
  }

  /**
 * Retorna la categoria de la persona en base a su edad
 * @param yyyy años
 * @param dd dias
 */
  public getCategoriaPersona(yyyy: number, dd: number) {
    if (yyyy <= 20 && dd == 0) {
      /**Niño */
      return 'Niño(a)'
    } else if (yyyy >= 20 && yyyy <= 59) {
      /** Adulto */
      return 'Adulto';
    } else {
      /**Adulto Mayor */
      return 'Adulto Mayor';
    }
  }

  /**
    * Calculo de pesos adulto y adulto mayor
    * @param yyyy 
    */
  public calcularPesosAYAM(yyyy: number, talla: number, genero: string, peso: number) {

    switch (genero) {
      case 'F':
        {
          for (let index = 0; index < this.RPESOIDEAL_F.length; index++) {
            if (yyyy >= this.RPESOIDEAL_F[index].edad_ini && yyyy <= this.RPESOIDEAL_F[index].edad_fin) {

              this.peso_min = (this.RPESOIDEAL_F[index].p_min * (talla * talla));
              this.peso_max = (this.RPESOIDEAL_F[index].p_max * (talla * talla));
              this.peso_ideal = (this.RPESOIDEAL_F[index].p_ideal * (talla * talla));

              this.diff_peso_min = this.peso_min - peso;
              this.diff_peso_max = this.peso_max - peso;
              this.diff_peso_ideal = this.peso_ideal - peso;

              break;
            }
          }
          break;
        }
      case 'M':
        {
          for (let index = 0; index < this.RPESOIDEAL_M.length; index++) {
            if (yyyy >= this.RPESOIDEAL_M[index].edad_ini && yyyy <= this.RPESOIDEAL_M[index].edad_fin) {

              this.peso_min = (this.RPESOIDEAL_M[index].p_min * (talla * talla));
              this.peso_max = (this.RPESOIDEAL_M[index].p_max * (talla * talla));
              this.peso_ideal = (this.RPESOIDEAL_M[index].p_ideal * (talla * talla));

              break;
            }
          }
          break;
        }
      default:
        break;
    }

  }

  /**
   * Obtiene el nombre de la categoria, la imagen y el estado de imc
   * @param categoria 
   * @param imc 
   */
  public getCategoriaIMC(categoria: string, imc: number) {
    console.log('Ingreso:  ' + categoria);
    switch (categoria) {
      case "Adulto":
        {
          console.log('Ingreso:  ' + categoria);
          this.cat_person = categoria;
          this.calcularPesosAYAM(this.loginr.data.paciente.ages.years, this.loginr.data.paciente.size, this.loginr.data.paciente.gender, this.loginr.data.paciente.weight);

          console.log('imc <<<' + imc);
          for (let index = 0; index < this.RANGOIMCADULTO.length; index++) {

            if (imc >= this.RANGOIMCADULTO[index].vmin && imc <= this.RANGOIMCADULTO[index].vmax) {
              this.imc_name = this.RANGOIMCADULTO[index].name;
              console.log('Index ' + index)
              this.img_imc = this.RANGOIMCADULTO[index].image.split('{$}').join(this.loginr.data.paciente.gender.toLowerCase());
              console.log('>>>> ' + this.img_imc);
              break;
            }
          }

          break;
        }
      case "Adulto Mayor":
        {
          console.log('Ingreso:  ' + categoria);
          this.cat_person = categoria;
          this.calcularPesosAYAM(this.loginr.data.paciente.ages.years, this.loginr.data.paciente.size, this.loginr.data.paciente.gender, this.loginr.data.paciente.weight);;

          break;
        }
      default:
        /** Niños */

        break;
    }
  }

}
