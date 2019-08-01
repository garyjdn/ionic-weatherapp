import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../service/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  weather: Observable<any>;
  image = null;

  constructor(
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const location = this.activatedRoute.snapshot.paramMap.get('location');
    this.weather = this.weatherService.getWeather(location);
    this.weather.subscribe(res => {
      console.log(res);
      if (res.weather[0].main === 'Clear') {
        this.image = 'assets/Black Outline/Lighter Heat.png';
      } else if (res.weather[0].main === 'Clouds') {
        this.image = 'assets/Black Outline/Cloud.png';
      } else if (res.weather[0].main === 'Thunderstorm') {
        this.image = 'assets/Black Outline/Lightning.png';
      } else {
        this.image = 'assets/Black Outline/Rain.png';
      }
    });
    console.log(this.weather);
  }

}
