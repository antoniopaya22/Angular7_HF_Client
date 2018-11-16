import { Component, OnInit } from '@angular/core';
import Laptop from 'src/app/laptop'
import { LaptopService } from 'src/app/laptop.service';

@Component({
  selector: 'app-all-laptops',
  templateUrl: './all-laptops.component.html',
  styleUrls: ['./all-laptops.component.css']
})
export class AllLaptopsComponent implements OnInit {

  laptops : Laptop[];

  constructor(private ls: LaptopService) { }

  recargar(){
    this.ls
      .getAllLaptops()
      .subscribe((data: Laptop[]) => {
        this.laptops = [];
        data.forEach(x => this.laptops.push(new Laptop(x['Key'], x['Record']['marca'],
          x['Record']['modelo'], x['Record']['color'], x['Record']['propietario'])))
        console.log(this.laptops);
    });
  }

  ngOnInit() {
    this.recargar();
    setInterval(() => {
      this.recargar();
    },3000);
  }


}
