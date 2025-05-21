import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddPersonForm from './Pages/AddPersonForm';
import AddCarForm from './Pages/AddCarForm';
import DeleteCars from './Pages/DeleteCars';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addperson' element={<AddPersonForm />} />
                <Route path='/addcar/:id' element={<AddCarForm />} />
                <Route path='/deletecars/:id' element={<DeleteCars />} />
            </Routes>
        </Layout>
    );
}

export default App;