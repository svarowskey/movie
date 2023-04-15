import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IconService } from './icon.service';
import { Observable } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'mv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input() name!: string;
  @Input() isActive?: boolean;
  @Input() isFill?: boolean;
  public svgIcon$!: Observable<SafeHtml>;

  constructor(public iconService: IconService) {}

  ngOnInit(): void {
    this.svgIcon$ = this.iconService.getIcon(this.name);
  }
}
