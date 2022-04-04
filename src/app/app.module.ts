import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourGuideComponent } from './tour-guide/tour-guide.component';
import { PrivateDriverComponent } from './private-driver/private-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourGuideComponent,
    PrivateDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
