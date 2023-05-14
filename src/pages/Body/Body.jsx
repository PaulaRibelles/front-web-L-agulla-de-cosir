import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { Users } from '../Users/Users';
import { Appointment } from '../Appointment/Appointment';
import { UpdateProfile } from '../UpdateProfile/UpdateProfile';
import { GalleryWoman } from '../Gallery/GalleryWoman';
import { UserAppointment } from '../userAppointment/userAppointment';
import { AdminAppointments } from '../Admin/AdminAppointments';
import { GalleryMan } from '../Gallery/GalleryMan';
import { AdminCreateDressmaker } from '../Admin/AdminCreateDressmaker';
import { UpdateAppointment } from '../UpdateAppointment.jsx/UpdateAppointment';
import { AdminGetDressmaker } from '../Admin/AdminGetDressmaker';
import { AdminUpdateDressmaker } from '../Admin/AdminUpdateDressmaker';
import { AdminGetAllUsers } from '../Admin/AdminGetAllUsers';



export const Body = () => {
    return (
        <>
            <Routes>
                {/* HOME */}
                <Route path='/' element={<Home />}/>
                <Route path='/woman' element={<GalleryWoman/>}/>
                <Route path='/man' element={<GalleryMan/>}/>
                {/* AUTH */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={ <Register />}/>
                {/* USER */}
                <Route path='/profile' element={ <Profile />}/>
                <Route path='/users' element={ <Users />}/>
                <Route path='/appointment' element={ <Appointment />}/>
                <Route path='/getClient' element={<UserAppointment/>}/>
                <Route path='/update' element={<UpdateAppointment/>}/>
                <Route path='/UpdateProfile' element={<UpdateProfile/>}/>
                {/* ADMIN */}
                <Route path='/getAll' element={<AdminAppointments/>}/>
                <Route path='/getDressmaker' element={<AdminGetDressmaker/>}/>
                <Route path='/allUsers' element={<AdminGetAllUsers/>}/>
                <Route path='/createDressmaker' element={<AdminCreateDressmaker/>}/>
                <Route path='/updateDressmaker' element={<AdminUpdateDressmaker/>}/>
                
            </Routes>
        </>
    )
}
