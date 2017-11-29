import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  location;
  humidity;
  tempAvg;
  tempHigh;
  tempLow;
  condition;


  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    // $(document).ready(function(){
    //   alert("working");
    //   $("#submit_btn").click(function(){
    //     alert("clicked");
    //   })
    // })
  }

  onSearch(){
    this._apiService.getWeatherInfo(this.location, (data) => {
      console.log(data);
      this.humidity = data.main.humidity;
      this.tempAvg = data.main.temp;
      this.tempHigh = data.main.temp_max;
      this.tempLow = data.main.temp_min;
      this.condition = data.weather[0].main;
    });
  }
  

}
