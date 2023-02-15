import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-parent',
  templateUrl: './back-to-parent.component.html',
  styleUrls: ['./back-to-parent.component.scss']
})
export class BackToParentComponent implements OnInit {
  @Input() pageTitle:string = 'CRUD Page';
  constructor() { }

  ngOnInit(): void {
  }

}
