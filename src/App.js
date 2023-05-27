import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Booking from './components/pages/Bookings/Booking';
import Layout from './components/layout/Layout';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/booking-confirmed' element={<ConfirmedBooking />} />
          </Routes>
        </Layout>

      </BrowserRouter>
    </div>
  );
}

export default App;
