import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material';

import { Serie } from 'src/app/core/models/serie.model';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  @Input() serie: Serie;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  calculator(id: number) {
    const dialogRef = this.dialog.open(CalculatorComponent, {
      width: '300px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
