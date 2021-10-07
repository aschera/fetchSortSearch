import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.scss']
})
export class MovietableComponent implements OnInit {

  constructor() {
  }

  @Output()
  movieSelected: EventEmitter<any> = new EventEmitter<any>();

  @Input() data: any | undefined;

  ngOnInit(): void {
  }

    select(i: any) {
    this.movieSelected.emit(i);
  }

}
