import { Component, OnInit } from '@angular/core';
import { Paciente } from '../models/paciente';
import { InfoGlobalService } from '../services/info-global.service';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Data } from '../models/series-response';
// import { Chart } from 'chart.js';

/* // FOR XCHARTJS CHARTS
export interface DataG {
  datasets: Dataset[];
  labels: string[];
}

export interface Dataset {
  label: string;
  backgroundColor: string[];
  borderColor: string[];
  data: number[];
  fill: boolean;
  lineTension: number;
  pointRadius: number;
  pointBorderWidth: number;
  pointHoverRadius: number;
}
*/

@Component({
  selector: 'app-tab-ant03',
  templateUrl: './tab-ant03.page.html',
  styleUrls: ['./tab-ant03.page.scss'],
})
export class TabAnt03Page implements OnInit {
  paciente = new Paciente();
  series = new Data();
  public pesoChart: GoogleChartInterface;
  public tallaChart: GoogleChartInterface;
  public imcChart: GoogleChartInterface;
  public mmeChart: GoogleChartInterface;
  public pgcChart: GoogleChartInterface;
  dataPesos = [];
  dataTalla = [];
  dataImc = [];
  dataMme = [];
  dataPgc = [];
  /* //FOR CHARTJs
  datam: DataG;
  datacj = [];
*/
  constructor(public infog: InfoGlobalService) {
    // this.paciente = this.infog.loginr.data.paciente;
    //this.paciente = JSON.parse(localStorage.getItem('lresponse'));

    this.infog.reload();
    this.infog.loginr.data.paciente = JSON.parse(localStorage.getItem('lresponse'));
    console.log('Enter tab 2');
    this.infog.getCategoriaIMC(this.infog.getCategoriaPersona(this.infog.loginr.data.paciente.ages.years, this.infog.loginr.data.paciente.ages.days), this.infog.loginr.data.paciente.imc);
    console.log('Exit tab 2');
    console.log(this.infog.imc_name);


    this.series = JSON.parse(localStorage.getItem('series'));
    /**Pesos */
    /*// FOR CHART JS
    this.datam = {
      datasets: [],
      labels: []
    };
    this.datam.datasets.push({ label: null, backgroundColor: ['rgba(54, 162, 235, 0.2)'], borderColor: ['rgba(54, 162, 235, 1)'], data: [], fill: false, lineTension: 0.1, pointRadius: 1, pointBorderWidth: 1, pointHoverRadius: 1 });
    this.datam.datasets.push({ label: null, backgroundColor: ['rgba(255, 99, 132, 0.2)'], borderColor: ['rgba(255,99,132,1)'], data: [], fill: false, lineTension: 0.2, pointRadius: 1, pointBorderWidth: 1, pointHoverRadius: 1 });
    this.datam.datasets.push({ label: null, backgroundColor: ['rgba(75, 192, 192, 0.2)'], borderColor: ['rgba(75, 192, 192, 1)'], data: [], fill: false, lineTension: 0.3, pointRadius: 1, pointBorderWidth: 1, pointHoverRadius: 1 });
    this.datam.datasets.push({ label: null, backgroundColor: ['rgba(255, 206, 86, 0.2)'], borderColor: ['rgba(255, 206, 86, 1)'], data: [], fill: false, lineTension: 0.15, pointRadius: 1, pointBorderWidth: 1, pointHoverRadius: 1 });

    this.datam.datasets[0].label = 'peso';
    this.datam.datasets[1].label = 'mínimo';
    this.datam.datasets[2].label = 'ideal';
    this.datam.datasets[3].label = 'máximo';
*/
    this.dataPesos = [];
    this.dataPesos.push(['time', 'peso', 'mínimo', 'ideal', 'máximo']);

    const objArrayPesos = Object.entries(this.series.pesos);
    objArrayPesos.forEach(([key, value]) => {
      this.dataPesos.push([key, value, this.infog.peso_min, this.infog.peso_ideal, this.infog.peso_max]);

      /** for chart js*/
      /*this.datam.datasets[0].data.push(value);
      this.datam.datasets[1].data.push(Math.round((this.infog.peso_min + Number.EPSILON) * 100) / 100);
      this.datam.datasets[2].data.push(Math.round((this.infog.peso_ideal + Number.EPSILON) * 100) / 100);
      this.datam.datasets[3].data.push(Math.round((this.infog.peso_max + Number.EPSILON) * 100) / 100);
      this.datam.labels.push(key);*/

    });

    /**Talla */
    this.dataTalla = [];
    this.dataTalla.push(['time', 'estatura']);
    const objArrayTalla = Object.entries(this.series.tallas);
    objArrayTalla.forEach(([key, value]) => {
      this.dataTalla.push([key, value * 100]);
    });
    /**IMC */
    this.dataImc = [];
    this.dataImc.push(['time', 'imc']);
    const objArrayImc = Object.entries(this.series.imcs);
    objArrayImc.forEach(([key, value]) => {
      this.dataImc.push([key, value]);
    });
    /**MME */
    this.dataMme = [];
    this.dataMme.push(['time', 'mme']);
    const objArrayMme = Object.entries(this.series.mmes);
    objArrayMme.forEach(([key, value]) => {
      this.dataMme.push([key, value]);
    });
    /**PGC */
    this.dataPgc = [];
    this.dataPgc.push(['time', 'pgc']);
    const objArrayPgc = Object.entries(this.series.pcgs);
    objArrayPgc.forEach(([key, value]) => {
      this.dataPgc.push([key, value]);
    });

  }

  ngOnInit() {
    this.loadGraphics();
  }

  ionViewDidEnter() {

  }

  loadGraphics() {

    /**PESO */
    this.pesoChart = {
      chartType: 'LineChart',
      dataTable: this.dataPesos,
      //firstRowIsData: true,
      options: {
        timeline: {
          groupByRowLabel: true
        },
        explorer: {
          actions: ['dragToZoom', 'rightClickToReset'],
          axis: 'horizontal',
          keepInBounds: true,
          maxZoom: 20
        },
        tooltip: { trigger: 'selection' },
        // Group selections
        // by x-value.
        aggregationTarget: 'category',
        //title: 'EVOLUCION PESO [Kg]',
        //titlePosition: 'center',
        selectionMode: 'multiple',
        //curveType: 'function',
        /*animation: {
          duration: 1000,
          easing: 'out',
        },*/
        titleTextStyle: {
          color: '#145a69'
        },
        hAxis: {
          //gridlines: { color: '#333', minSpacing: 20 },
          //title: 'Fechas de Mediciones',
          type: 'date',
          // textPosition:'in',
          slantedText: true,
          //slantedTextAngle: 90,
          // maxTextLines: 20,
          // viewWindow: {
          //   min: new Date(2020, 3, 27, 0),
          //   max: new Date(2020, 3, 14, 0)
          // },
          // viewWindowMode: 'maximized',
          //ticks: [{ v: 0, f: '0%' }]
          format: 'yy/MM/dd',
          //gridlines: {count: 3}
        },
        vAxis: {
          title: 'Pesos [Kg]',
          
        },
        legend: {
          position: 'top',
          aligned: 'center',
        },
        // lineWidth: 2,
        pointsVisible: true,
        pointSize: 2,
        //theme: 'maximized',
        //width: '100%',
        chartArea: {
          right: 15,
          left: 50,
          bottom: 40,
          //top: 10, width: "80%" 
        },
        //height:400,
      },
    };

    /**TALLA */
    this.tallaChart = {
      chartType: 'LineChart',
      dataTable: this.dataTalla,
      //firstRowIsData: true,
      options: {
        pointsVisible: true,
        pointSize: 2,
        chartArea: {
          right: 15,
          left: 50,
          bottom: 40,
        },
        titlePosition: 'center',
        titleTextStyle: {
          color: '#145a69'
        },
        hAxis: {
          type: 'date',
          slantedText: true,
        },
        vAxis: {
          title: 'Centímetros'
        },
        legend: { position: 'top', aligned: 'center' },
      },
    };

    /**IMC */
    this.imcChart = {
      chartType: 'LineChart',
      dataTable: this.dataImc,
      //firstRowIsData: true,
      options: {
        series: {
          0: { color: '#109618' },
          // 0: { color: '#e2431e' },
          1: { color: '#e7711b' },
          2: { color: '#f1ca3a' },
          3: { color: '#e2431e' },
          4: { color: '#1c91c0' },
          5: { color: '#43459d' },
        },
        pointsVisible: true,
        pointSize: 2,
        chartArea: {
          right: 15,
          left: 50,
          bottom: 40,
        },
        titlePosition: 'center',
        titleTextStyle: {
          color: '#109618'
        },
        hAxis: {
          //title: 'Fechas de Mediciones',
          slantedText: true,
        },
        vAxis: {
          title: 'IMC'
        },
        legend: { position: 'top' },
      },
    };

    /**MME */
    this.mmeChart = {
      chartType: 'LineChart',
      dataTable: this.dataMme,
      //firstRowIsData: true,
      options: {
        //curveType: 'function',
        series: {
          0: { color: '#e14045' },
        },
        pointsVisible: true,
        pointSize: 2,
        chartArea: {
          right: 15,
          left: 50,
          bottom: 40,
        },
        titlePosition: 'center',
        titleTextStyle: {
          color: '#145a69'
        },
        hAxis: {
          //title: 'Fechas de Mediciones',
          slantedText: true,
        },
        vAxis: {
          title: 'MME'
        },
        legend: { position: 'top' },
      },
    };

    /**PGC */
    this.pgcChart = {
      chartType: 'LineChart',
      dataTable: this.dataPgc,
      //firstRowIsData: true,
      options: {
        //curveType: 'function',
        pointsVisible: true,
        pointSize: 2,
        chartArea: {
          right: 15,
          left: 50,
          bottom: 40,
        },
        series: {
          0: { color: '#00acba' },
        },
        //title: 'EVOLUCION PORCENTAJE GRASA CORPORAL [PGC]',
        titlePosition: 'center',
        titleTextStyle: {
          color: '#145a69'
        },
        hAxis: {
          //title: 'Fechas de Mediciones',
          slantedText: true,
        },
        vAxis: {
          title: 'Porcentaje [%]'
        },
        legend: { position: 'top' },
      },
    };

  }

  /**
   * FOR CHART JS
   * CALL ONNGINIT
   */
  // showChart() {
  //   var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
  //   var chart = new Chart(ctx, {
  //     type: 'line',
  //     data: this.datam/*{
  //       datasets: this.datacj [{
  //         label: 'uno',
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         data: [0, 20, 40, 50],
  //         fill: false,
  //       }],
  //       labels: ['January', 'February', 'March']
  //     }*/,
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: true,
  //       /* animation: {
  //          duration: 10000,
  //          easing: 'easeOutElastic',
  //        }*/
  //       scales: {
  //         ticks: {
  //           beginAtZero: false
  //         },
  //         xAxes: [{
  //           display: true,
  //           scaleLabel: {
  //             display: true,
  //             labelString: 'Fechas'
  //           }
  //         }],
  //         yAxes: [{
  //           display: true,
  //           scaleLabel: {
  //             display: true,
  //             labelString: 'Peso [Kg]'
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

}
