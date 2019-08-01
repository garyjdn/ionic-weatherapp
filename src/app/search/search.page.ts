import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../service/country.service';
import { NavController } from '@ionic/angular';
// import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  countries: Observable<any>;
  private selectedCountry = '';

  constructor(
    private countryService: CountryService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.countries = this.countryService.getAllCountry();
    this.countries.subscribe();
  }

  optionFn(option) {
    this.selectedCountry = option.detail.value;

  }

  search() {
    this.navController.navigateForward(`/result/${this.selectedCountry}`);
  }



}
