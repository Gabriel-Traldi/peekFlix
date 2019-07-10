import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { SeriesService } from '../shared/serie.service';
import { Episode } from 'src/app/core/models/episode.model';
import { TimeHelper } from 'src/app/shared/helpers/time.helper';
import { Subject, of } from 'rxjs';
import { finalize, take, mergeMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateHelper } from 'src/app/shared/helpers/date.helper';
import { CalculatorService } from '../shared/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  nextSeason: boolean;
  releaseDate: Date;
  totalMinutes: number;

  minDate: Date;
  loading: boolean;
  error: boolean;

  formGroup: FormGroup;

  constructor(
    private calculatorService: CalculatorService,
    private formBuilder: FormBuilder,
    private seriesService: SeriesService,
    @Inject(MAT_DIALOG_DATA) private idSerie: number,
  ) {
    this.nextSeason = true;

    this.loading = false;
    this.error = false;

    this.minDate = new Date();
  }

  ngOnInit() {

    this.getInfosToCalculate();
    this.buildForm();

    this.addEventsForm();

  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      date: [null],
      hours: [null, Validators.compose([
        Validators.max(24),
        Validators.min(1),
      ])],
      minutes: [null, Validators.compose([
        Validators.max(59),
        Validators.min(1),
      ])]
    });
  }

  getInfosToCalculate() {

    this.loading = true;
    this.totalMinutes = 0;
    this.nextSeason = false;

    this.seriesService.getSeasonHistoric(this.idSerie)
      .pipe(
        take(1),
        mergeMap(
          (infoSeason) => {
            if (infoSeason.nextSeason) {
              this.releaseDate = new Date(infoSeason.nextSeason.releaseDate);
              return this.seriesService.getAllEpisodesBySeason(this.idSerie, infoSeason);
            } else {
              return of([]);
            }
          }
        ),
        finalize(
          () => this.loading = false
        )
      ).subscribe(
        (result) => {

          if (result.length === 0) { return; }

          let list: Episode[] = [];

          for (const value of result) {
            list = list.concat(value);
          }

          this.totalMinutes = this.getAllMinutes(list);

          if (this.totalMinutes > 0) {
            this.nextSeason = true;
          }

          console.log('minutes', this.totalMinutes);
          console.log('releaseDate', this.releaseDate);

        }
      );
  }

  addEventsForm() {

    this.formGroup.controls.date.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(date => this.changeDate(date));

    this.formGroup.controls.hours.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(hours => this.changeHours(hours));

    this.formGroup.controls.minutes.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(minutes => this.changeMinutes(minutes));

  }

  changeDate(date: Date) {

    if (!date) { return; }

    this.error = false;

    this.formGroup.controls.hours.reset(null, { emitEvent: false });
    this.formGroup.controls.minutes.reset(null, { emitEvent: false });

    this.calculateWhenDate(date);
  }

  changeHours(hours: number) {

    if (!hours || this.formGroup.controls.hours.invalid) { return; }

    this.error = false;

    this.formGroup.controls.date.reset(null, { emitEvent: false });

    this.calculateWhenMinute(TimeHelper.hoursToMinutes(hours) + this.formGroup.controls.minutes.value);
  }

  changeMinutes(minutes: number) {

    if (!minutes || this.formGroup.controls.minutes.invalid) { return; }

    this.error = false;

    this.formGroup.controls.date.reset(null, { emitEvent: false });

    this.calculateWhenMinute(minutes + TimeHelper.hoursToMinutes(this.formGroup.controls.hours.value));
  }

  getAllMinutes(episodes: Episode[]) {

    return episodes.reduce((sum, episode) => sum += TimeHelper.timeStringTotimeNumber(episode.duration), 0);
  }

  calculateWhenDate(date: Date) {

    const { hours, minutes } = this.calculatorService.getHourAndMinutesWithDate(date, this.releaseDate, this.totalMinutes);

    console.log('hours', hours);
    console.log('minutes', minutes);

    if (hours > 24 || (hours === 24 && minutes > 0)) { this.error = true; }

    this.formGroup.controls.hours.setValue(hours, { emitEvent: false });
    this.formGroup.controls.minutes.setValue(minutes, { emitEvent: false });
  }

  calculateWhenMinute(minutes: number) {

    const finalDate = this.calculatorService.getDateWithMinutes(minutes, this.releaseDate, this.totalMinutes);

    console.log('finalDate', finalDate);

    if (finalDate.getTime() < new Date().getTime()) { this.error = true; }

    this.formGroup.controls.date.setValue(finalDate, { emitEvent: false });
  }

}
