import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';



function BookingsForm({ handleSubmit, occasions, availableTimes, dispatchDateChange }) {
    const [showAlert, setShowAlert] = useState({
        show: false,
        type: 'success',
    });

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: 1,
            occasion: '',
        },
        onSubmit: async (values) => {
            try {
                await handleSubmit(values);
                handleShowAlert('success');
                formik.resetForm();
            } catch (e) {
                handleShowAlert('danger');
            }
        },
        validationSchema: Yup.object().shape({
            date: Yup.date().required('Reservation Date is required'),
            time: Yup.string()
                .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:mm)')
                .required('Reservation Time is required'),
            guests: Yup.number().required('Number of guests is required'),
            occasion: Yup.string(),
        }),
    });

    const handleShowAlert = (type) => {
        setShowAlert({
            type: type,
            show: true,
        });
    };

    const handleAlertClose = () => {
        setShowAlert((prev) => ({
            ...prev,
            show: false,
        }));
    };

    const responseMessages = {
        success: 'Reservation Successful!',
        danger: 'Failed to make Reservation!',
    };

    const ErrorMessage = ({ message }) => <p className="text-danger">{message}</p>;

    const SubmitButton = ({ isLoading }) => (
        <button className="btn btn-primary" type="submit" disabled={isLoading}>
            {isLoading ? (
                <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading...
                </>
            ) : (
                'Make Reservation'
            )}
        </button>
    );

    return (
        <>
            {showAlert.show && (
                <div className={`alert alert-${showAlert.type} alert-dismissible fade show`} role="alert">
                    {responseMessages[showAlert.type]}
                    <button type="button" className="btn-close" onClick={handleAlertClose} aria-label="Close"></button>
                </div>
            )}
            <form onSubmit={formik.handleSubmit}>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="date">Reservation Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formik.values.date}
                            onChange={(e) => {
                                dispatchDateChange(e);
                                formik.handleChange(e);
                            }}
                            className="form-control"
                            aria-label="Reservation Date"
                            aria-describedby="basic-addon1"
                        />
                        {formik.errors.date && <ErrorMessage message={formik.errors.date} />}
                    </div>

                    <div className="col">
                        <label htmlFor="time">Reservation Time</label>
                        <select id="time"
                            name="time"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            className="form-control"
                            aria-label="Reservation Time"
                            aria-describedby="basic-addon1"
                        >
                            <option value="" disabled>Reservation Time</option>
                            {availableTimes.map((time, index) => <option key={index} value={time}>{time}</option>)}
                        </select>
                        {formik.errors.time && <ErrorMessage message={formik.errors.time} />}
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            value={formik.values.guests}
                            onChange={formik.handleChange}
                            className="form-control"
                        />
                        {formik.errors.guests && <ErrorMessage message={formik.errors.guests} />}
                    </div>

                    <div className="col">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            name="occasion"
                            value={formik.values.occasion}
                            onChange={formik.handleChange}
                            className="form-control"
                        >
                            <option disabled value="">
                                occasion
                            </option>
                            {occasions.map((o, index) => (
                                <option key={index} value={o}>
                                    {o}
                                </option>
                            ))}
                        </select>
                        {formik.errors.occasion && <ErrorMessage message={formik.errors.occasion} />}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <SubmitButton isLoading={formik.isSubmitting} />
                    </div>
                </div>
            </form>
        </>

    )
}

export default BookingsForm