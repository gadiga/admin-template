import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StockFetchService } from './stock-fetch.service';

@Component({
  selector: 'stock-ticker',
  templateUrl: './stock-ticker.component.html',
  styleUrls: ['./stock-ticker.component.scss']
})
export class StockTickerComponent implements OnInit {

  ticker: string = 'GOOG';
  stockName: string = 'Loading Chart for ...';
  quote: any[];
  loading: boolean = true;
  chart = [];
  public lineChartData: Array<any> = [
    {data: [], label: 'Open'},
    {data: [], label: 'High'},
    {data: [], label: 'Low'},
    {data: [], label: 'Close'}
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private stockFetchService: StockFetchService) { }

  ngOnInit() {
    setTimeout(()=>this.fetchData(), 3000);
  }

  fetchData() {
    let subscription = this.stockFetchService.fetchStockChart(this.ticker).subscribe((data: any)=>{
      subscription.unsubscribe();
      this.quote = <any[]>data;
      this.quote.forEach(element => {
        this.lineChartData[0].data.push(element.open);
        this.lineChartData[1].data.push(element.high);
        this.lineChartData[2].data.push(element.low);
        this.lineChartData[3].data.push(element.close);
        this.lineChartLabels.push(element.date);
      });
      this.loading = false;

      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: this.lineChartLabels,
          datasets: [
            {
              data: this.lineChartData[0].data,
              borderColor: "#3cba9f",
              fill: false,
              label: this.lineChartData[0].label
            },
            {
              data: this.lineChartData[1].data,
              borderColor: "#ff0000",
              fill: false,
              label: this.lineChartData[1].label
            },
            {
              data: this.lineChartData[2].data,
              borderColor: "#ba3c9f",
              fill: false,
              label: this.lineChartData[2].label
            },
            {
              data: this.lineChartData[3].data,
              borderColor: "#00ff00",
              fill: false,
              label: this.lineChartData[3].label
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [
              {display: true}
            ],
            yAxes: [
              {display: true}
            ]
          }
        }
      });

    });

    let coSubscription  = this.stockFetchService.fetchStockInfo(this.ticker).subscribe((data: any)=>{
      subscription.unsubscribe();
      this.ticker = data.symbol;
      this.stockName = data.companyName;      
    });
  }

  getDataFor(stock: string) {
    this.lineChartData = [
      {data: [], label: 'Open'},
      {data: [], label: 'High'},
      {data: [], label: 'Low'},
      {data: [], label: 'Close'}
    ];
    this.lineChartLabels = [];
    this.ticker = stock;
    this.fetchData();
  }

}
