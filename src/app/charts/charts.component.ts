import { Component, OnInit } from '@angular/core';
//import { NgModule } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

 public barChartOptions = {
       scaleShowVerticalLines: false,
       responsive: true
 }

 public barChartsLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 public barChartType = 'bar';
 public barChartLegend = 'true';
 public barChartData= [
   {data: [65, 59, 80, 81, 56, 55, 40,], label: 'Series A'},
   {data: [28, 48, 40, 19, 86, 27, 90,], label: 'Series B'}
 ];

//  public colors = [
//   { // 1st Color
//     backgroundColor: 'rgb(255, 99, 132, 0.5)',
//     borderColor: 'rgb(255, 99, 132, 1)',
//     borderWidth: 1
//   },
//   { // 2nd Color.
//     backgroundColor: 'rgb(255, 205, 86, 0.5)',
//     borderColor: 'rgb(255, 205, 86, 1)',
//     borderWidth: 1
//   },

// ]

//Donut Charts
public donutChartsLabels = ['Sales 1', 'Sales 2', 'Sales 3', 'Sales 4'];
public donutChartData= [120, 150, 180, 90];
public donutChartType = 'doughnut';
public donutChartLegend = 'true';

//Pie Charts
public pieChartsLabels = ['Sales 1', 'Sales 2', 'Sales 3', 'Sales 4'];
public pieChartData= [120, 150, 180, 90];
public pieChartType = 'pie';
public pieChartLegend = 'true';

// not from API
chart: Chart;
name = 'ng-7 chartjs';

// From API chart = []



  constructor(private _weather: WeatherService) { }

  ngOnInit() {
  // From API
    this._weather.dailyForecast()
    .subscribe(res => {
      console.log(res)
        var temp_max = [];
        var temp_min = [];
       // var alldates = res[0].list[1].dt;

        // let temp_max = temp_max1.map(res => res.main.temp_max)
        // let temp_min = temp_min1.map(res => res.main.temp_min)
        // let alldates = alldates1.map(res => res.dt)
       // let temp_max = res['list'].pipe(map(res => res.main.temp_max) );
        const weatherDates = []

        const _date = res[0]['list']

          for(let a of _date ){
            console.log(a);
            if(a.main.hasOwnProperty('sea_level')){
              console.log('test')
            }
            if(a.main.hasOwnProperty('temp_max')){
              temp_max.push(a.main.temp_max)
            }
            if(a.main.hasOwnProperty('temp_min')){
              temp_min.push(a.main.temp_min)
            }
            let jsdate = new Date(a.dt * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
          }

          // alldates.forEach((res) => {
          //   let jsdate = new Date(res * 1000)
          //   weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
          // })
          
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          {
            data: temp_max,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: temp_min,
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })
          

    })


  // })

  // Not From API
//   this.chart = new Chart('canvas', {
//     type: 'bar',
//     data: {
//       labels: dringlichkeiten.map(x => x.id),
//       datasets: [
//         {
//           label: 'My Bar Chart',
//           data: dringlichkeiten.map(x => x.value),
//           backgroundColor: ['red', 'green', 'yellow', 'blue', 'orange', 'pink', 'brown']
//         }
//       ]
//     },
//   });
// }
// }

// console.log(dringlichkeiten);

// var dringlichkeiten  = [{
//   "id": 1,
//   "value": 883
// },
// {
//   "id": 2,
//   "value": 5925
// },
// {
//   "id": 3,
//   "value": 17119
// },
// {
//   "id": 4,
//   "value": 27144
// },
// {
//   "id": 5,
//   "value": 2758
// },
// {
//   "id": 6,
//   "value": 12758
// },
// {
//   "id": 7,
//   "value": 22758
// }];
  }
}
  