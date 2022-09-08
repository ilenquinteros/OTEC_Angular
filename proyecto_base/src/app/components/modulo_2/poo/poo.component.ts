import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/models/clases';
import { IPersona } from 'src/app/models/interfaces';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.css']
})
export class POOComponent implements OnInit {

  trabajador:Trabajador = new Trabajador("John Doe", "11.111.111-1", 45, true, 1000000);
  porcentaje: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  funcionAumentarSueldo(){
    this.trabajador.aumentarSueldo(this.porcentaje)

    let persona:IPersona = {
      rut: "11.111.111-1",
      nombre: "Jose",
      edad: 43
    };

    let persona2: IPersona = persona;

    console.log(persona)
    console.log(persona2)
  }

}
