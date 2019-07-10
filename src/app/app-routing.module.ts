import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then(mod => mod.SeriesModule)
  },
  { path: '',
    redirectTo: '/series',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
