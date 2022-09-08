import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.route.navigate(['/home'])
  }

}
