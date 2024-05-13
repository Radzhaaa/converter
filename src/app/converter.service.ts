import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',

})
export class ConverterService {
  api_url = "https://www.cbr-xml-daily.ru/daily_json.js";
  constructor(private httpClient: HttpClient) {
  }

  getCurrencyRate() : Observable<any>{
      return this.httpClient.get(this.api_url);
  }
}
