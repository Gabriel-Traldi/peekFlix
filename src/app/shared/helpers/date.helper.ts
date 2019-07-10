export class DateHelper {

    constructor() { throw new Error('Class not instantiable'); }

    static daysBetween(dateMinuend: Date, dateSubtrahend: Date) {

        // Get 1 day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;

        // Convert both dates to milliseconds
        const dateMinuendMs = dateMinuend.getTime();
        const dateSubtrahendMs = dateSubtrahend.getTime();

        const differenceMs = dateMinuendMs - dateSubtrahendMs;

        return Math.round(differenceMs / oneDay);
    }

}

