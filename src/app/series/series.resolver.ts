import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { SeriesService } from './shared/serie.service';
import { Serie } from '../core/models/serie.model';



@Injectable()
export class SeriesResolver implements Resolve<Observable<Serie[]>> {

    constructor(
        private seriesService: SeriesService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Serie[]> {
        return this.seriesService.listSeries();
    }

}
