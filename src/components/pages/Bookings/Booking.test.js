import { render, fireEvent } from '@testing-library/react';
import Booking from './Booking';

describe('Booking', () => {
    test('initializeTimes should return the initial times array', () => {
        const { initializeTimes } = Booking();
        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00"]);
    });

    test('updateTimes should return a subset of times array', () => {
        const booking = render(<Booking />);
        const updatedTimes = booking.updateTimes();
        expect(booking.times).toContain(updatedTimes[0]);
        expect(booking.times).toContain(updatedTimes[1]);
        expect(booking.times).toContain(updatedTimes[2]);
        expect(updatedTimes.length).toBeLessThanOrEqual(3);
    });
});
