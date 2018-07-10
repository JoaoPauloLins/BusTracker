import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { TrackerComponent } from './bus/tracker/tracker.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { BusComponent } from './bus/bus.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC35R9sDrHnjaep0DJ7gZjjw66HnXFABLg'
    })
  ],
  providers: [],
  declarations: [
    CompanyComponent,
    BusComponent,
    TrackerComponent]
})
export class CompanyModule { }
