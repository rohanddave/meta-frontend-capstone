import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../../../utils/api';
import pages from '../../../utils/pages';

function initializeTimes() {
    const times = fetchAPI(new Date());
    return times;
}

function updateTimes(availableTimes, date) {
    return fetchAPI(date);
}

function Booking() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();
    const occasions = ["birthday", "anniversary"];

    const handleSubmit = (formData) => {
        const response = submitAPI(formData);
        navigate(pages.bookingConfirmation);
        return response;
    }

    return (
        <BookingForm
            handleSubmit={handleSubmit}
            occasions={occasions}
            availableTimes={availableTimes}
            dispatchDateChange={dispatch}
        />
    );
}

export default Booking;
