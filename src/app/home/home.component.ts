import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import {  inject } from '@angular/core';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
//tao biến dữ liệu mặc định
  housingLocationList: Housinglocation[] = [];// định dang trống để được truyền dữ liệu qua service
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();//gọi ra phương thức để in ra màn hình tất cả dữ liệu đã tạo
  }
}
