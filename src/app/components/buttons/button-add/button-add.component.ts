import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mv-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  @Input() addFunction!: CallableFunction;
  @Input() width: string = '100%'
  @Input() height: string = '100%'

  hovered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.hovered = false;
    if (this.addFunction) {
      this.addFunction();
    }
  }

}
