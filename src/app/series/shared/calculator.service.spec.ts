import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {

  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
      ]
    });

    service = new CalculatorService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return hours and minutes', () => {
    const { hours, minutes } = service.getHourAndMinutesWithDate(new Date(2019, 6, 9), new Date(2019, 6, 10), 70);
    expect(hours).toEqual(1);
    expect(minutes).toEqual(10);
  });

  it('should return only minutes', () => {
    const { hours, minutes } = service.getHourAndMinutesWithDate(new Date(2019, 6, 9), new Date(2019, 6, 11), 70);
    expect(hours).toEqual(0);
    expect(minutes).toEqual(35);
  });

  it('should return 2 days before', () => {
    const date = service.getDateWithMinutes(35, new Date(2019, 6, 11), 70);
    expect(date).toEqual(new Date(2019, 6, 9));
  })

});
