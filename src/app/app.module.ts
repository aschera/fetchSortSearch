import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,

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
