import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockFetchService {

  constructor(private http: HttpClient) { }

  fetchStockChart(stock: string) :Observable<Object> {
    let URL = 'https://api.iextrading.com/1.0/stock/' + stock + '/chart';
    return this.http.get(URL);
  }

  fetchStockInfo(stock: string) :Observable<Object> {
    let COURL = 'https://api.iextrading.com/1.0/stock/' + stock + '/company';
    return this.http.get(COURL);
  }
}
