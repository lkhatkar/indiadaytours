import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourGuideComponent } from './tour-guide/tour-guide.component';
import { PrivateDriverComponent } from './private-driver/private-driver.component';
import { TermsComponent } from './terms/terms.component';
import { ToursComponent } from './tours/tours.component';
import { ContactComponent } from './contact/contact.component';
import { AccommodationComponent } from './accommodation/accommodation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourGuideComponent,
    PrivateDriverComponent,
    TermsComponent,
    ToursComponent,
    ContactComponent,
    AccommodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
