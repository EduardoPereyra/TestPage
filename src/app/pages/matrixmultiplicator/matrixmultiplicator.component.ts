import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-matrixmultiplicator',
  templateUrl: './matrixmultiplicator.component.html',
  styleUrls: ['./matrixmultiplicator.component.scss']
})
export class MatrixmultiplicatorComponent implements OnInit {
  sizeXA: number;
  sizeYA: number;
  sizeXB: number;
  sizeYB: number;
  msgError: string;
  error: boolean;
  showMatriz: boolean;
  matrixA = [];
  matrixB = [];
  matrixResult = [];
  result: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.sizeXA = null;
    this.sizeYA = null;
    this.sizeXB = null;
    this.sizeYB = null;
    this.msgError = 'Invalid numbers!';
    this.error = false;
    this.showMatriz = false;
    this.result = false;
  }

  createMatrix(): void {
    this.result = false;
    if (this.sizeXA && this.sizeXB && this.sizeYA && this.sizeYB) {
      if (this.sizeYB > 10 || this.sizeYA > 10 || this.sizeXB > 10 || this.sizeXB > 10) {
        this.msgError = 'Numbers must be less than 10';
        this.error = true;
        this.result = false;
      } else {
        this.error = false;
        for (let y = 0; y < this.sizeYA; y++) {
          this.matrixA[y] = [];
          for (let x = 0; x < this.sizeXA; x++) {
            this.matrixA[y][x] = Math.floor(Math.random() * 10);
          }
        }
        for (let y = 0; y < this.sizeYB; y++) {
          this.matrixB[y] = [];
          for (let x = 0; x < this.sizeXB; x++) {
            this.matrixB[y][x] = Math.floor(Math.random() * 10);
          }
        }
        this.showMatriz = true;
      }
    } else {
      this.showMatriz = false;
      this.msgError = 'Invalid numbers!';
      this.error = true;
    }
  }

  multiplyButton(): void {
    if (this.sizeYB > 10 || this.sizeXA > 10) {
      this.msgError = 'Numbers must be less than 10';
      this.error = true;
      this.result = false;
    } else if (this.sizeXA === this.sizeYB) {
      this.error = false;
      // this.result = true;
      this.multiply();
    } else {
      this.msgError = 'The number of columns in A must be equal to the number of rows in B.';
      this.error = true;
      this.result = false;
    }
  }

  multiply(): void {
    const aNumRows = this.matrixA.length;
    const aNumCols = this.matrixA[0].length;
    // const bNumRows = this.matrixB.length;
    const bNumCols = this.matrixB[0].length;
    this.matrixResult = [];  // initialize array of rows
    for (let r = 0; r < aNumRows; ++r) {
      this.matrixResult[r] = new Array(bNumCols); // initialize the current row
      for (let c = 0; c < bNumCols; ++c) {
        this.matrixResult[r][c] = 0;             // initialize the current cell
        for (let i = 0; i < aNumCols; ++i) {
          this.matrixResult[r][c] += this.matrixA[r][i] * this.matrixB[i][c];
        }
      }
    }
    this.result = true;
  }
}
