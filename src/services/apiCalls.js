import axios from 'axios';

const root = "http://localhost:5000"

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
    return await axios.get(`${root}/api/users`, config);
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


