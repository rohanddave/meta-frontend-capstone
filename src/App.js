import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import Layout from './components/Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booking' element={<Booking />} />
          </Routes>
        </Layout>

      </BrowserRouter>
    </div>
  );
}

export default App;
