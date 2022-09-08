import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  valor: string = ""
  texto: string = "Default"

  constructor() { }

  ngOnInit(): void {
    console.log("On Init")
    console.log("-----------------------------------")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes")
    console.log(changes)
    console.log("-----------------------------------")
  }

  ngDoCheck(): void {
    console.log("Do Check")
    console.log("-----------------------------------")
  }

  ngAfterContentInit(): void {
    console.log("Content Init")
    console.log("-----------------------------------")
  }

  ngAfterContentChecked(): void {
    console.log("Content Checked")
    console.log("-----------------------------------")
  }

  ngAfterViewInit(): void {
    console.log("View Init")
    console.log("-----------------------------------")
  }

  ngAfterViewChecked(): void {
    console.log("View Check")
    console.log("-----------------------------------")
  }
  
  ngOnDestroy(): void {
    console.log("Destroy")
    console.log("-----------------------------------")
  }


  setTexto(){
    this.texto = this.valor;
  }

}
