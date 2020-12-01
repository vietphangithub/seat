import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeatDoneComponent } from './list-seat-done.component';

describe('ListSeatDoneComponent', () => {
  let component: ListSeatDoneComponent;
  let fixture: ComponentFixture<ListSeatDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSeatDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSeatDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
