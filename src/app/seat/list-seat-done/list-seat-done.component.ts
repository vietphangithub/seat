import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ActivatedRoue is used to get the current associated components information.

import { VisitingService } from '../../shared/visiting/visiting.service';
import { Visiting } from '../../shared/visiting/visiting';

@Component({
  selector: 'app-list-seat-done',
  templateUrl: './list-seat-done.component.html',
  styleUrls: ['./list-seat-done.component.css']
})
export class ListSeatDoneComponent implements OnInit {

  coffeeID: string;
  seats: Visiting[];
  constructor(
    public route: ActivatedRoute,
    public visitingService: VisitingService
  ) {
    this.coffeeID = this.route.snapshot.params.id;
    console.log('this.coffeeID', this.coffeeID);
  }

  ngOnInit(): void {
    let dateForlder = this.visitingService.GetForMatDateDDMMYYYY();
    let s = this.visitingService.GetListVisiting(this.coffeeID, dateForlder);
    s.snapshotChanges().subscribe(data => {
      // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.seats = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        if(a['status'] == 1){
          a['$key'] = item.key;
          a['coffeeID'] = this.coffeeID;
          this.seats.push(a as Visiting);
        }
      });
    });
  }

  onWaiting(seat){
    seat.status = 0;
    this.visitingService.UpdateVisiting(seat);
    console.log('seat', seat);
  }


}
