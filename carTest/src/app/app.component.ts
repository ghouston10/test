import { Component, OnInit} from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'carTest';
  cars: object;
  errorMsg: string;

  constructor(private carService: CarService) { }

  ngOnInit() {
  this.carService.getCars().subscribe(data => {
    if (data) {
      this.cars = data;
  } else {
      this.errorMsg = 'No data available';
  }
  });
  }

}
