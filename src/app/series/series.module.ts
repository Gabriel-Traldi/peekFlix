import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SeriesComponent } from './series.component';
import { SeriesRoutingModule } from './series-routing.module';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieComponent } from './serie/serie.component';
import { SeriesResolver } from './series.resolver';
import {
    MatCardModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE
} from '@angular/material';
import { FilterByTitle } from './shared/filter-by-title.pipe';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './shared/calculator.service';

const APP_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
      },
      display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MMM YYYY',
      },
};


@NgModule({
    declarations: [
        CalculatorComponent,
        FilterByTitle,
        SeriesComponent,
        SerieComponent,
        SerieListComponent,
    ],
    imports: [
        CommonModule,
        // FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        SeriesRoutingModule,
    ],
    entryComponents: [CalculatorComponent],
    providers: [
        CalculatorService,
        SeriesResolver,
        { provide: MAT_DATE_LOCALE, useValue: 'pt' }, 
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    ],
    bootstrap: [SeriesComponent]
})
export class SeriesModule { }
