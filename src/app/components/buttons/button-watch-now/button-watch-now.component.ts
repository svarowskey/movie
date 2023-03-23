import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mv-button-watch-now',
  templateUrl: './button-watch-now.component.html',
  styleUrls: ['./button-watch-now.component.scss']
})
export class ButtonWatchNowComponent implements OnInit {

  @Input() isMini: boolean = true;
  @Input() width: string = '100%'
  @Input() height: string = '100%'


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('watch now!')
  }

}
