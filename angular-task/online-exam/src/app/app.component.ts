import { Component, OnInit } from '@angular/core';
import { Product, UsersService } from './shared/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'online-exam';
  imageUrl = 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  products$:Observable<Product[]>;
  productList:Array<Product>=[];
  constructor(private user:UsersService){
    this.products$ = this.user.getProducts();
  }


  ngOnInit(): void {
    console.log('App component initialized');
    // this is where you can initialize your app components and services
    this.products$.subscribe(p=>{
      this.productList = p;
    })

  }
}
