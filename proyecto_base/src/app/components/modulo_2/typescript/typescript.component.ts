import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  texto: string = "Hola"


  valor: boolean = false;
  items: string[] = ["item 1", "item 2", "item 3"]


  constructor() { }

  ngOnInit(): void {
    let numero:number = 6
    let texto: string = "texto"
    let booleano: boolean = true
    let array: number[] = [1,2,3]
    let tupla:[number, string] = [2,""]


    this.funcion();
  }

  funcion(){
    let number:number = 1
    if(number == 1){
      console.log(this.texto)
    }

    let array: number[] = [1,2,3]
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      console.log(element)
    }

    while (number!=10) {
      console.log(number)
      number++
    }

    switch(this.texto){
      case "Hola":
        console.log("Verdadero");
        break;
      default:
        console.log("Falso")
        break;
    }
  }

}
