import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  valor: boolean = true;
  items: string[] = ["item 1", "item 2", "item 3"]

  constructor() { }

  ngOnInit(): void {
  }

}
