import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {
  @Input() score
  constructor(private router: Router,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#170c08';
  }

}
