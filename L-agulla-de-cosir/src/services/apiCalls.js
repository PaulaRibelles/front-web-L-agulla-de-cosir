import axios from 'axios';

const root = "http://localhost:3000"

export const logMe = async (body) => {
    return await axios.post(`${root}/auth/login`, body);
}





