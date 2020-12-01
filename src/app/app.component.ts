// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'DeliverCoffee';
// }




import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="demoApp";
  provider:any;
  user:any;

  constructor(){

  }
  
  ngOnInit(): void {
    // var provider = new firebase.default.auth.GoogleAuthProvider();
    // var test = new firebase.default.auth.FacebookAuthProvider()
    // this.provider = provider;
    // firebase.default.auth().onAuthStateChanged(user=> {
    //   this.user = user;
    // });

  }

 

  
}