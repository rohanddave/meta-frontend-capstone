import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../../../utils/api';
import pages from '../../../utils/pages';
import BookingsTable from './BookingsTable';

function initializeTimes() {
    const times = fetchAPI(new Date());
    return times;
}

function updateTimes(availableTimes, date) {
    return fetchAPI(date);
}

function Booking() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const occasions = ["birthday", "anniversary"];

    const handleSubmit = (formData) => {
        const response = submitAPI(formData);
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings = [...bookings, formData];
        localStorage.setItem('bookings', JSON.stringify(bookings));
        setBookings(JSON.parse(localStorage.getItem('bookings')));
        navigate(pages.bookingConfirmation);
        return response;
    };

    useEffect(() => {
        setBookings(JSON.parse(localStorage.getItem('bookings')));
    }, []);

    return (
        <>
            <div className='row'>
                <BookingForm
                    handleSubmit={handleSubmit}
                    occasions={occasions}
                    availableTimes={availableTimes}
                    dispatchDateChange={dispatch}
                />
            </div>

            <div className='row'>
                <BookingsTable bookings={bookings} />
            </div>
        </>

    );
}

export default Booking;
