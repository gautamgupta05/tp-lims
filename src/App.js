import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';
import UpdatePatient from './components/UpdatePatient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<PatientList />} />
            <Route path='/add' element={<AddPatient />} />
            <Route path='/update/:id' element={<UpdatePatient />} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<UpdatePatient />} />
            <Route path='/patients' element={<PatientList />} />
          

          <Route path='/signup' element={<SignUp />} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
