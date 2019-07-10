import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { SeriesService } from './shared/serie.service';
import { Serie } from '../core/models/serie.model';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit, OnDestroy {

  filter: string;
  series: Serie[];

  debounce: Subject<string>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private serieService: SeriesService,
  ) {
    this.filter = '';
    this.debounce = this.serieService.filterDebounce;
  }

  ngOnInit() {
    this.series = this.activatedRoute.snapshot.data.series;

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
