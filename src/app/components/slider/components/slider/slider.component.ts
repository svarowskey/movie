import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideItem } from '../../types/slider.interface';


@Component({
  selector: 'mv-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

  @Input() sliderArray: SlideItem[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  constructor() { }

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
  }

  resetTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goNext(), 10000);
  }

  goToPrev(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.sliderArray.length - 1 : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goNext(): void {
    const isLastSlide = this.currentIndex === this.sliderArray.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl(): string {
    if (this.sliderArray?.length) {
      return `url(${ this.sliderArray[this.currentIndex].url })`;
    } else {
      return '';
    }
  }

  getCurrentSlideTitle(): string {
    if (this.sliderArray?.length) {
      return this.sliderArray[this.currentIndex].title;
    } else {
      return '';
    }
  }
}
