import { describe, it, expect } from 'vitest';
import { getCurrentTimeStamp, getCurrentTimeStampInSeconds } from '../src/timeUtils';

describe('Time Utils Tests', () => {
    it('getCurrentTimeStamp returns a number', () => {
        const timeStamp = getCurrentTimeStamp();
        expect(typeof timeStamp).toBe('number');
    });

    it('getCurrentTimeStampInSeconds returns a number', () => {
        const timeStampInSeconds = getCurrentTimeStampInSeconds();
        expect(typeof timeStampInSeconds).toBe('number');
    });

    it('getCurrentTimeStampInSeconds is approximately equal to getCurrentTimeStamp divided by 1000', () => {
        const timeStamp = getCurrentTimeStamp();
        const timeStampInSeconds = getCurrentTimeStampInSeconds();

        expect(timeStampInSeconds).toBe(Math.floor(timeStamp / 1000));
    });
});
