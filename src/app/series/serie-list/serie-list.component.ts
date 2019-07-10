import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/core/models/serie.model';


@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss']
})
export class SerieListComponent implements OnInit {

  @Input() series: Serie[];

  constructor() { }

  ngOnInit() {
  }

}
