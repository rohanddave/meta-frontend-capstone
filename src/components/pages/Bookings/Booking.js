import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../../../utils/api';

function initializeTimes() {
    const times = fetchAPI(new Date());
    return times;
}

function updateTimes(availableTimes, date) {
    return fetchAPI(date);
}

function Booking() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const occasions = ["birthday", "anniversary"];

    return (
        <BookingForm
            handleSubmit={submitAPI}
            occasions={occasions}
            availableTimes={availableTimes}
            dispatchDateChange={dispatch}
        />
    );
}

export default Booking;
