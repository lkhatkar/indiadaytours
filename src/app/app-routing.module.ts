import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivateDriverComponent } from './private-driver/private-driver.component';
import { TourGuideComponent } from './tour-guide/tour-guide.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tour-guide-service', component: TourGuideComponent},
  {path: 'private-driver-service', component: PrivateDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
