import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.scss']
})
export class MovietableComponent implements OnInit {
SelectedMovie: any;

  constructor() {
  }

  @Input() data: any | undefined;

  ngOnInit(): void {
  }

    select(i: any) {
    this.SelectedMovie = i;
  }

}