import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  baseUrl = 'http://localhost:8081/api';
  private readonly notifier: NotifierService;

  constructor(private http: HttpClient,
    notifierService: NotifierService) {
      this.notifier = notifierService;
  }

  addLaptop(marca, modelo, color, propietario) {
    const laptop = {
      marca : marca,
      modelo : modelo,
      color : color,
      propietario : propietario
    };
    console.log(laptop);
    this.http.post(`${this.baseUrl}/laptop`, laptop)
        .subscribe(res => {
          console.log('Done');
          this.notifier.notify( 'success', 'Transaction id: '+res['trans_id'] );
        });
  }

  getAllLaptops() {
    return this.http.get(`${this.baseUrl}/laptops`);
  }

  editLaptop(id) {
    return this.http.get(`${this.baseUrl}/laptop/${id}`);
  }

  deleteLaptop(id) {
    this.http.delete(`${this.baseUrl}/laptop/${id}`)
        .subscribe(res => {
          console.log('Done');
          this.notifier.notify( 'success', 'Transaction id: '+res['trans_id'] );
        });
  }

  updateLaptop(marca, modelo, color, propietario, id) {
    const laptop = {
      marca : marca,
      modelo : modelo,
      color : color,
      propietario : propietario
    };
    this.http
      .put(`${this.baseUrl}/laptop/${id}`, laptop)
      .subscribe(res => {
        console.log('Done');
        this.notifier.notify( 'success', 'Transaction id: '+res['trans_id'] );
      });
  }
}
