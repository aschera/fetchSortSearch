import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from "@angular/common/http";
import { MenubarComponent } from './menubar/menubar.component';
import { MovietableComponent } from './movietable/movietable.component';
import { MovieselectionComponent } from './movieselection/movieselection.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MovietableComponent,
    MovieselectionComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class AppModule { }
