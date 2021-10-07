import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movieselection',
  templateUrl: './movieselection.component.html',
  styleUrls: ['./movieselection.component.scss']
})
export class MovieselectionComponent implements OnInit {

  constructor() { }

  @Input() selectedMovie: any | undefined;

  ngOnInit(): void {

  }

}
