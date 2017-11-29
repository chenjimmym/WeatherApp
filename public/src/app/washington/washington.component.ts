import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  city = 'district of columbia';
  humidity;
  tempAvg;
  tempHigh;
  tempLow;
  condition;

  constructor(private _apiService: ApiService) { 

  }

  ngOnInit() {
    this._apiService.getWeatherInfo(this.city, (data) => {
      console.log(data);
      this.humidity = data.main.humidity;
      this.tempAvg = data.main.temp;
      this.tempHigh = data.main.temp_max;
      this.tempLow = data.main.temp_min;
      this.condition = data.weather[0].main;
    });
  }

}
