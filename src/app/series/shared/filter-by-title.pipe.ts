import { Pipe, PipeTransform } from '@angular/core';
import { Serie } from 'src/app/core/models/serie.model';

@Pipe({ name: 'filterByTitle' })
export class FilterByTitle implements PipeTransform {
  transform(series: Serie[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return series.filter(snack =>
        snack.title.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return series;
    }
  }

}
