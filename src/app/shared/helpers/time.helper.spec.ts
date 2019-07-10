import { TimeHelper } from "./time.helper";

describe('TimeHelper', () => {

    it('should throw errow when call constructor', () => {

        expect(() => { const dateHelper = new TimeHelper(); }).toThrowError('Class not instantiable');
    });

    describe('timeString', () => {

        it('should convert string to number, when string complete', () => {

            const minutes = TimeHelper.timeStringTotimeNumber('1h 30min');
            expect(minutes).toEqual(90);
        });

        it('should convert string to number, when string contains only hours', () => {

            const minutes = TimeHelper.timeStringTotimeNumber('1h');
            expect(minutes).toEqual(60);
        });

        it('should convert string to number, when string contains only minutes', () => {

            const minutes = TimeHelper.timeStringTotimeNumber('30min');
            expect(minutes).toEqual(30);
        });
    });

    describe('simple conversions', () => {

        it('should convert hours to days', () => {

            const days = TimeHelper.hoursToDays(48);
            expect(days).toEqual(2);
        });

        it('should convert hours to minutes', () => {

            const minutes = TimeHelper.hoursToMinutes(3);
            expect(minutes).toEqual(180);
        });

        it('should convert minutes to hours', () => {

            const hours = TimeHelper.minutesToHours(180);
            expect(hours).toEqual(3);
        });

        it('should convert minutes to days', () => {

            const days = TimeHelper.minutesToDays(1440);
            expect(days).toEqual(1);
        });
    });

});
