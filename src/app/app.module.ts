import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomDatePipe } from './my-pipe/custom-date.pipe';
import { CustomPhonePipe } from './my-pipe/custom-phone.pipe';
import { SortDirective } from './my-directive/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDatePipe,
    CustomPhonePipe,
    SortDirective
  ],
  imports: [
  BrowserModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
