import { DateHelper } from './date.helper';

describe('DateHelper', () => {

    it('should throw errow when call constructor', () => {

        expect(() => { const dateHelper = new DateHelper(); }).toThrowError('Class not instantiable');
    });

    it('should return 2 days of difference', () => {

        const days = DateHelper.daysBetween(new Date(2019, 6, 12), new Date(2019, 6, 10));
        expect(days).toEqual(2);
    });

    it('should return -2 days of difference', () => {

        const days = DateHelper.daysBetween(new Date(2019, 6, 8), new Date(2019, 6, 10));
        expect(days).toEqual(-2);
    });

});
