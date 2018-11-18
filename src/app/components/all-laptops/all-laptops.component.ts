import { Component, OnInit } from '@angular/core';
import Laptop from 'src/app/laptop'
import { LaptopService } from 'src/app/laptop.service';
import { DialogConfirmService } from '../../dialog/delete-confirm/dialog-confirm.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-laptops',
  templateUrl: './all-laptops.component.html',
  styleUrls: ['./all-laptops.component.css']
})
export class AllLaptopsComponent implements OnInit {

  laptops : Laptop[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ls: LaptopService,
    private dcg: DialogConfirmService) { }

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

  openConfirmationDialog(id) {
    this.dcg.confirm('Cuidado, vas a eliminar un Laptop', '¿Estas seguro?')
    .then(() => {
      this.ls.deleteLaptop(id);
      this.router.navigate(['laptops']);
    })
    .catch(() => console.log('Operacion de eliminar Laptop cancelada'));
  }

  ngOnInit() {
    this.recargar();
    setInterval(() => {
      this.recargar();
    },3000);
  }


}
