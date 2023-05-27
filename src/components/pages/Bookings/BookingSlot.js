import React from 'react'

function BookingSlot({ booking, index }) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td>{booking.guests}</td>
            <td>{booking.occasion}</td>
        </tr>
    )
}

export default BookingSlot