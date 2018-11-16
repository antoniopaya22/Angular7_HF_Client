import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLaptopComponent } from './components/add-laptop/add-laptop.component';
import { EditLaptopComponent } from './components/edit-laptop/edit-laptop.component';
import { AllLaptopsComponent } from './components/all-laptops/all-laptops.component';
import { GetLaptopComponent } from './components/get-laptop/get-laptop.component';

import { LaptopService } from './laptop.service';


const routes: Routes = [
  {
    path: 'laptops/add',
    component: AddLaptopComponent
  },
  {
    path: 'laptops/get/:id',
    component: GetLaptopComponent
  },
  {
    path: 'laptops/edit/:id',
    component: EditLaptopComponent
  },
  {
    path: 'laptops',
    component: AllLaptopsComponent
  },
  {
    path: '',
    component: AllLaptopsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AddLaptopComponent,
    EditLaptopComponent,
    AllLaptopsComponent,
    GetLaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
