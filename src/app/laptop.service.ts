import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  addLaptop(marca, modelo, color, propietario) {
    const laptop = {
      marca : marca,
      modelo : modelo,
      color : color,
      propietario : propietario
    };
    console.log(laptop);
    this.http.post(`${this.baseUrl}/laptop`, laptop)
        .subscribe(res => console.log('Done'));
  }

  getAllLaptops() {
    return this
           .http
           .get(`${this.baseUrl}/laptops`);
  }

  editLaptop(id) {
    return this
            .http
            .get(`${this.baseUrl}/laptop/${id}`);
  }

  updateLaptop(marca, modelo, color, propietario, id) {

    const laptop = {
      id : id,
      marca : marca,
      modelo : modelo,
      color : color,
      propietario : propietario
    };
    this
      .http
      .put(`${this.baseUrl}/laptop`, laptop)
      .subscribe(res => console.log('Done'));
  }
}
