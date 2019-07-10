import { Injectable } from '@angular/core';
import { DateHelper } from 'src/app/shared/helpers/date.helper';
import { TimeHelper } from 'src/app/shared/helpers/time.helper';

@Injectable()
export class CalculatorService {

    constructor() { }

    getDateWithMinutes(minutesPerDay: number, releaseDate: Date, totalMinutes: number) {

        const date = new Date(releaseDate.getTime());

        const days = Math.ceil(totalMinutes / minutesPerDay);

        date.setDate(releaseDate.getDate() - days);

        return date;
    }

    getHourAndMinutesWithDate(date: Date, releaseDate: Date, totalMinutes: number) {

        const daysBetween = DateHelper.daysBetween(releaseDate, date);

        if (daysBetween < 0) {
            throw new Error('A data para início deve ser anterior a data de estréia');
        }

        const minutesPerDay = totalMinutes / daysBetween;

        return {
            hours: Math.trunc(TimeHelper.minutesToHours(minutesPerDay)),
            minutes: Math.round(minutesPerDay % 60),
        };
    }

}
