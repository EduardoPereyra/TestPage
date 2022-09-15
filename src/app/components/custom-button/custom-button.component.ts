import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() text = '';
  @Input() color = 'white';
  @Input() colorHover: string;
  @Input() backgroundColor = '#E94560';
  @Input() backgroundColorHover: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
