import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PrivateDriverComponent } from './private-driver/private-driver.component';
import { TermsComponent } from './terms/terms.component';
import { TourGuideComponent } from './tour-guide/tour-guide.component';
import { ToursComponent } from './tours/tours.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tour-guide-service', component: TourGuideComponent},
  {path: 'private-driver-service', component: PrivateDriverComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'accommodation', component: AccommodationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
