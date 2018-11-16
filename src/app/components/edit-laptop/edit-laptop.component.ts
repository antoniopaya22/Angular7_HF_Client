import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LaptopService } from 'src/app/laptop.service';

@Component({
  selector: 'app-edit-laptop',
  templateUrl: './edit-laptop.component.html',
  styleUrls: ['./edit-laptop.component.css']
})
export class EditLaptopComponent implements OnInit {

  laptop: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private ls: LaptopService) { }

  createForm() {
    this.angForm = this.fb.group({
      marca: ['', Validators.required ],
      modelo: ['', Validators.required ],
      color: ['', Validators.required ],
      propietario: ['', Validators.required ]
    });
  }

  updateLaptop(marca, modelo, color, propietario) {
    this.route.params.subscribe(params => {
       this.ls.updateLaptop(marca, modelo, color, propietario, params['id']);
       this.router.navigate(['laptops']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ls.editLaptop(params['id']).subscribe(res => {
        this.laptop = res;
      });
    });
  }

}
