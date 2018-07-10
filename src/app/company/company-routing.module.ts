import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { TrackerComponent } from './bus/tracker/tracker.component';
import { BusComponent } from './bus/bus.component';

const busRoutes: Routes = [
    {path: 'company',
    component: CompanyComponent,
    children: [
        {
            path: ':name/bus',
            component: BusComponent,
            children: [
                {
                    path: ':registration',
                    component: TrackerComponent
                }
            ]
        }
    ]}
];

@NgModule({
    imports: [
      RouterModule.forChild(busRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class CompanyRoutingModule { }
