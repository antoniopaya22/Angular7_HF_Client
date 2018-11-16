import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LaptopService } from 'src/app/laptop.service';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ls: LaptopService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      marca: ['', Validators.required ],
      modelo: ['', Validators.required ],
      color: ['', Validators.required ],
      propietario: ['', Validators.required ]
    });
  }

  addLaptop(marca, modelo, color, propietario) {
    this.ls.addLaptop(marca, modelo, color, propietario);
  }

  ngOnInit() {
  }

}
