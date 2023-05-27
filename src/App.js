import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Booking from './components/pages/Bookings/Booking';
import Layout from './components/layout/Layout';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import pages from './utils/pages';
import UnderConstruction from './components/pages/UnderConstruction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={pages.home} element={<Home />} />
            <Route path={pages.booking} element={<Booking />} />
            <Route path={pages.bookingConfirmation} element={<ConfirmedBooking />} />
            <Route path={pages.construction} element={< UnderConstruction />} />
          </Routes>
        </Layout>

      </BrowserRouter>
    </div>
  );
}

export default App;
