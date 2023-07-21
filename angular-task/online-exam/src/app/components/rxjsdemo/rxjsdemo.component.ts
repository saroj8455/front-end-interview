import { Component,OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/model/customer.model';

@Component({
  selector: 'app-rxjsdemo',
  templateUrl: './rxjsdemo.component.html',
  styleUrls: ['./rxjsdemo.component.css']
})
export class RxjsdemoComponent implements OnInit {

  customers$: Observable<Customer[]> | undefined;

  constructor(private customerService:CustomerService){
    console.log('constructor called');
  }

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
  }

}
