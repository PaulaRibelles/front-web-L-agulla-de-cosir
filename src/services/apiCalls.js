import axios from 'axios';

const root = "http://localhost:5000"

// const root = "http://back-web-l-agulla-de-cosir-production.up.railway.app"

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

    //Get profile

export const myProfile = async (token) =>{

    let config = {
        headers: { 
        'Authorization': `Bearer, ${token}`,
    }
    };
    return await axios.get(`${root}/user/profile`, config);
}

    //Update profile

export const userUpdate = async (body,token) =>{
    let config ={
        headers: {
            'Authorization': `Bearer, ${token}`,
        }
    };
    return await axios.put(`${root}/user/update`,body,config);
}


//APPOINTMENTS

    //Create appointments

export const myAppointment = async (body, token) => {
    let config = {
        headers: {
            'Authorization': `Bearer, ${token}`,
        }
    };
    return await axios.post(`${root}/appointment/create`, body, config);
}

    //Get appointments

export const bringAppointments = async (token) => {
    let config = {
        headers: {
            'Authorization': `Bearer, ${token}`,
        }
    };
    return await axios.get(`${root}/appointment/getClient`, config);
}

    //Update appointments

    export const appointmentUpdate = async (id, body, token) => {

        let config = {
            headers: {
                'Authorization': `Bearer, ${token}`,
            }
        };
        return await axios.put(`${root}/appointment/update/${id}`, body, config)
    }

    //Delete appointments

export const deleteAppointments = async (id, token) => {

    let config = {
        headers: {
            'Authorization': `Bearer, ${token}`,
        }
    };
    return await axios.delete(`${root}/appointment/delete/${id}`, config)
}


//ADMIN 

    //Get ALL appointments 

    export const allAppointments = async (token) => {
        let config = {
            headers: {
                'Authorization': `Bearer, ${token}`,
            }
        };
        return await axios.get(`${root}/appointment/getAll`, config);
    }

    //Create Dressmaker

    export const createDressmaker = async (body, token) => {
        let config = {
            headers: {
                'Authorization': `Bearer, ${token}`,
            }
        };
        return await axios.post(`${root}/admin/createDressmaker`, body, config);
    }

    //Get Dressmaker profile

    export const getDress = async (token) => {
        let config = {
            headers: {
                'Authorization': `Bearer, ${token}`,
            }
        };
        return await axios.get(`${root}/admin/getDressmaker`, config);
    }

    //Update Dressmaker

    export const dressmakerUpdate = async (id, body, token) => {
        let config = {
            headers: {
                'Authorization': `Bearer, ${token}`,
            }
        };
        return await axios.put(`${root}/admin/updateDressmaker/${id}`, body, config);
    }