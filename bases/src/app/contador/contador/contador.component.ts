import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  title: string = 'Contador';
  numero: number = 10;
  base: number = 5;

  // public sumar(): void {
  //   this.numero += 1;
  // }

  // public restar(): void {
  //   this.numero -= 1;
  // }

  public acumular(valor: number):void {
    this.numero += valor;
  }

  constructor() { }

  ngOnInit() {
  }

}
