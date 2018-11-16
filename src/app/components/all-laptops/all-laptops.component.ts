import { Component, OnInit } from '@angular/core';
import Laptop from 'src/app/Laptop'
import { LaptopService } from 'src/app/laptop.service';

@Component({
  selector: 'app-all-laptops',
  templateUrl: './all-laptops.component.html',
  styleUrls: ['./all-laptops.component.css']
})
export class AllLaptopsComponent implements OnInit {

  laptops : Laptop[];

  constructor(private ls: LaptopService) { }

  ngOnInit() {
    this.ls
      .getAllLaptops()
      .subscribe((data: Laptop[]) => {
        this.laptops = data;
    });
  }

}
