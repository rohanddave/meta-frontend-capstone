import React from 'react'
import BookingSlot from './BookingSlot';

function BookingsTable({ bookings }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Guests</th>
                    <th scope="col">Occasion</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking, index) => <BookingSlot key={index} booking={booking} index={index} />)}
            </tbody>
        </table>
    )
}

export default BookingsTable