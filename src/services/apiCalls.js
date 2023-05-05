import axios from 'axios';

const root = "http://localhost:5000"

// const root = "back-web-l-agulla-de-cosir-production.up.railway.app"

//LOGIN

export const logMe = async (body) => {
    return await axios.post(`${root}/auth/login`, body);
}

//REGISTER

export const registerMe = async (body) => {
    return await axios.post(`${root}/auth/register`, body);
}

//USERS

export const bringUsers = async (token) => {
    
    let config = {
        headers: { 
        'Authorization': 'Bearer '+ token,  
    }
    };
    return await axios.get(`${root}/user/profile`, config);
}


//PROFILE

export const myProfile = async (token) =>{

    let config = {
        headers: { 
        'Authorization': `Bearer, ${token}`,
    }
    };
    return await axios.get(`${root}/user/profile`, config);
}

export const userUpdate = async (token) =>{
    let config ={
        headers: {
            'Authorization': `Bearer, ${token}`,
        }
    };
    return await axios.get(`${root}/user/update`, config);
}


//APPOINTMENTS

export const myAppointment = async (body, token) => {
    let config = {
        headers: {
            'Athorization': `Bearer, ${token}`,
        }
    };
    return await axios.post(`${root}/appointment/create`, body, config);
}

export const bringAppointments = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };
    return await axios.get(`${root}/appointment/getClient`, config);
}


export const allAppointments = async (token) => {
    let config = {
        headers: {
            'Authorization': `Bearer, ${token}`,
        }
    };
    return await axios.get(`${root}/appointment/getAll`, config);
}