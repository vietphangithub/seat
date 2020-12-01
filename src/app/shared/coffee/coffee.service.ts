import { Injectable } from '@angular/core';

// Firebase
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from '@angular/fire/database'; // Firebase modules for Database, Data list and Single object

import {Coffee} from '../coffee/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  listCoffee : AngularFireList<any>;
  coffeeObject : AngularFireObject<any>;
  

  constructor(public db: AngularFireDatabase) {
    
   }
    // Fetch Single Student Object
  GetCoffee(key: string) {
    this.coffeeObject = this.db.object('coffee/' + key);
    return this.coffeeObject;
  }

  AddCoffee(coffee : Coffee){
    this.listCoffee = this.db.list('/coffee');
    this.listCoffee.push({
      // id : coffee.id,
      name: coffee.name,
      address: coffee.address,
      urlQR: coffee.urlQR,
      ownerCoffee: coffee.ownerCoffee,
      phone: coffee.phone,
      email: coffee.email,
      createdDate: this.GetCurrentDate(),
      createdBy: coffee.createdBy,
      updatedDate: coffee.updatedDate,
      updatedBy: coffee.updatedBy,
      status: coffee.status

    });

  }


  UpdateCoffee(coffee : Coffee){
    this.db
    .object('/coffee/' + coffee.$key)
    .update({
      name: coffee.name,
      address: coffee.address,
      urlQR: coffee.urlQR,
      ownerCoffee: coffee.ownerCoffee,
      phone: coffee.phone,
      email: coffee.email,
      updatedDate: this.GetCurrentDate(),
      updatedBy: coffee.updatedBy,
      status: coffee.status
    });

  }

  DeleteCoffee(coffee: Coffee) {
    this.db
      .object('/coffee/'+ coffee.$key)
      .remove();
  }

  GetListCoffee() {
    this.listCoffee = this.db.list('coffee');
    return this.listCoffee;
  }
  GetCurrentDate() {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime =  time + ' ' + date;

    return dateTime;
  }


}
