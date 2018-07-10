import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { TrackerComponent } from './bus/tracker/tracker.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { BusComponent } from './bus/bus.component';
import { CompanyService } from './company.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC35R9sDrHnjaep0DJ7gZjjw66HnXFABLg'
    })
  ],
  providers: [
    CompanyService
  ],
  declarations: [
    CompanyComponent,
    BusComponent,
    TrackerComponent]
})
export class CompanyModule { }
