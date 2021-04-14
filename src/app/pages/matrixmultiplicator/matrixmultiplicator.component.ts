import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrixmultiplicator',
  templateUrl: './matrixmultiplicator.component.html',
  styleUrls: ['./matrixmultiplicator.component.scss']
})
export class MatrixmultiplicatorComponent implements OnInit {
  sizeXA:number;
  sizeYA:number;
  sizeXB:number;
  sizeYB:number;
  msgError:string;
  error:boolean;
  showMatriz:boolean;
  result:boolean;

  constructor() { }

  ngOnInit(): void {
    this.sizeXA = null;
    this.sizeYA = null;
    this.sizeXB = null;
    this.sizeYB = null;
    this.msgError = 'Ingrese numeros validos!';
    this.error = false;
    this.showMatriz = false;
    this.result = false;
  }

  createMatrix():void{
    this.result = false;
    if (this.sizeXA && this.sizeXB && this.sizeYA && this.sizeYB) {
      if(this.sizeYB > 10 || this.sizeYA > 10 || this.sizeXB > 10|| this.sizeXB > 10){
        this.msgError = 'Inserte una cantidad menor a 10';
        this.error = true;
        this.result = false;
      } else{
        this.error = false;
        this.showMatriz = true;
      }
    } else {
      this.showMatriz = false;
      this.msgError = 'Ingrese numeros validos!';
      this.error = true;
    }
  }

  multiply():void{
    if(this.sizeYB > 10 || this.sizeXA > 10){
      this.msgError = 'Inserte una cantidad menor a 10';
      this.error = true;
      this.result = false;
    } else if(this.sizeXA === this.sizeYB){
      this.error = false;
      this.result = true;
    } else{
      this.msgError = 'La cantidad de columnas en A tiene que ser igual a la cantidad de filas en B';
      this.error = true;
      this.result = false;
    }
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
