import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import {CoffeeComponent} from './coffee/coffee/coffee.component';
import {SeatDetailComponent} from './seat/seat-detail/seat-detail.component';
import {ListSeatComponent} from './seat/list-seat/list-seat.component';
import {ListSeatDoneComponent} from './seat/list-seat-done/list-seat-done.component';
import {LoginComponent} from './login/login.component'

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'coffee-seat/:id', component:SeatDetailComponent},
  { path: 'coffee-list-seat/:id', component:ListSeatComponent},
  { path: 'coffee-list-seat-done/:id', component:ListSeatDoneComponent},
  { path: 'coffee-seat', component:SeatDetailComponent},
  { path: 'coffee-list-seat', component:ListSeatComponent},
  { path: 'coffee-list-seat-done', component:ListSeatDoneComponent},

];



// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
