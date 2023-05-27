import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const mockHandleSubmit = jest.fn();
    const mockOccasions = ["birthday", "anniversary"];
    const mockAvailableTimes = ["17:00"];
    const mockDispatchDateChange = jest.fn();

    render(<BookingForm
        handleSubmit={mockHandleSubmit}
        occasions={mockOccasions}
        availableTimes={mockAvailableTimes}
        dispatchDateChange={mockDispatchDateChange}
    />);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})