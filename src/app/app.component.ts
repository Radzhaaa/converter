import {Component, OnInit} from '@angular/core';
import {ConverterService} from "./converter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'converter';
  dollar = 0;
  euro = 0;
  pound = 0;
  yen = 0;
  inputValue = 0;

  onKey(event: any) {
    if(event.target) {
      this.inputValue = event.target.value;

    }
  }
  constructor(private converter: ConverterService) {
  }
  ngOnInit() {
    this.converter.getCurrencyRate().subscribe(data => {
      let valutes = data["Valute"];
      this.dollar = Number(valutes["USD"]["Value"]);
      this.euro = Number(valutes["EUR"]["Value"]);
      this.pound = Number(valutes["GBP"]["Value"]);
      this.yen = Number(valutes["JPY"]["Value"]);

    });
  }
}
