import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mv-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel_container') carouselContainer!: ElementRef;
  @ViewChild('carouselElement') carousel!: ElementRef;
  @ViewChild('prev') prevArrow!: ElementRef;
  @ViewChild('next') nextArrow!: ElementRef;

  index = 0;
  amount: number = 0;
  currTransl: any[] = [];
  translationComplete = true;
  moveOffset = 0;

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.amount = document.getElementsByClassName("slide")?.length || 0;
    // get the width of the container
    this.moveOffset = parseInt(window.getComputedStyle(this.carouselContainer.nativeElement).width, 10);
    // calcuate the width of the carousel
    this.carousel.nativeElement.style.width = (this.amount * this.moveOffset) + 'px';
    // prevent multiple click when transition
    for(let i = 0; i < this.amount; i++) {
      this.currTransl[i] = -this.moveOffset;
    }
    // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
    this.carousel.nativeElement.insertBefore(this.carousel.nativeElement.children[4], this.carousel.nativeElement.children[0])
  }

  transitionCompleted() {
    this.translationComplete = true;
  }

  prevFunc = () => {
    if (this.translationComplete) {
      this.translationComplete = false;
      this.index--;
      if (this.index == -1) {
        this.index = this.amount - 1;
      }
      let outerIndex = (this.index) % this.amount;
      for (let i = 0; i < this.amount; i++) {
        let slide = document.getElementsByClassName("slide")[i] as HTMLElement;
        slide.style.opacity = '1';
        slide.style.transform = 'translateX(' + (this.currTransl[i] + this.moveOffset) + 'px)';
        this.currTransl[i] = this.currTransl[i] + this.moveOffset;
      }
      let outerSlide = document.getElementsByClassName("slide")[outerIndex] as HTMLElement;
      outerSlide.style.transform = 'translateX(' + (this.currTransl[outerIndex] - (this.moveOffset * this.amount)) + 'px)';
      outerSlide.style.opacity = '0';
      this.currTransl[outerIndex] = this.currTransl[outerIndex] - this.moveOffset * (this.amount);
      setTimeout(() => {
        this.transitionCompleted();
      }, 500)
    }
  }

  nextFunc = () => {
    if (this.translationComplete) {
      this.translationComplete = false;
      let outerIndex = ((this.index) % this.amount) || 0;
      this.index++;
      for (let i = 0; i < this.amount; i++) {
        let slide = document.getElementsByClassName("slide")[i] as HTMLElement;
        slide.style.opacity = '1';
        slide.style.transform = 'translateX(' + (this.currTransl[i] - this.moveOffset) + 'px)';
        this.currTransl[i] = this.currTransl[i] - this.moveOffset;
      }
      let outerSlide = document.getElementsByClassName("slide")[outerIndex] as HTMLElement;
      outerSlide.style.transform = 'translateX(' + (this.currTransl[outerIndex] + (this.moveOffset * this.amount)) + 'px)';
      outerSlide.style.opacity = '0';
      this.currTransl[outerIndex] = this.currTransl[outerIndex] + this.moveOffset * (this.amount);
      setTimeout(() => {
        this.transitionCompleted();
      }, 500)
    }
  }

}
