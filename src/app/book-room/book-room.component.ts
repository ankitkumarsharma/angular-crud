import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {
  pageTitle:string = 'Book a room, Large Form CRUD';
  constructor() { }

  ngOnInit(): void {
  }

}
