import React, { useReducer } from 'react';

import BookingsForm from '../BookingsForm';

const times = ["17:00", "18:00", "19:00", "20:00"];


function Booking() {
    const onSubmit = (values) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                random > 0.5 ? resolve() : reject();
            }, 100);
        });
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const occasions = ["birthday", "anniversary"];

    function initializeTimes() {
        return times;
    }

    function updateTimes() {
        const min = 0;
        const max = 3;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(random);
        return times.slice(0, random);
    }


    return (
        <BookingsForm
            handleSubmit={onSubmit}
            occasions={occasions}
            availableTimes={availableTimes}
            dispatchDateChange={dispatch}
        />
    );
}

export default Booking;
