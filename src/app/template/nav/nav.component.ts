import { Component } from '@angular/core';
import { SeriesService } from 'src/app/series/shared/serie.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    protected seriesService: SeriesService,
  ) {}

}
