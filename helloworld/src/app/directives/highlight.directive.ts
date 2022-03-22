import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective implements OnInit {
    @Input() appHighlight = '';
    constructor(private el: ElementRef) {
      
    }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.appHighlight);
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }