import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesComponent } from './series.component';
import { SeriesResolver } from './series.resolver';

const routes: Routes = [
    {
        path: '',
        component: SeriesComponent,
        resolve: {
            series: SeriesResolver,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeriesRoutingModule { }
