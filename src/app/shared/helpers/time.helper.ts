export class TimeHelper {

  constructor() { throw new Error('Class not instantiable'); }

  static timeStringTotimeNumber(time: string) {

    let minutes = 0;
    const partsOfTime = time.split(' ');

    partsOfTime.forEach(partOfTime => {

      if (partOfTime.indexOf('h') >= 0) {
        minutes += +partOfTime.replace('h', '') * 60;
      } else if (partOfTime.indexOf('min') >= 0) {
        minutes += +partOfTime.replace('min', '');
      }
    });

    return minutes;
  }

  static hoursToDays(hours: number) {
    return hours / 24;
  }

  static hoursToMinutes(hours: number) {
    return hours * 60;
  }

  static minutesToHours(minutes: number) {
    return minutes / 60;
  }

  static minutesToDays(minutes: number) {
    return Math.ceil(minutes / 60 / 24);
  }

}
