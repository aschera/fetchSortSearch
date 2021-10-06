import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star wars movies';
  data:any = []
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const url ='https://star-wars-api.herokuapp.com/films'
    this.http.get(url).subscribe((res)=>{
      this.data = res
    })
  }

  select(i: any) {
    console.log(i)
  }

 }
