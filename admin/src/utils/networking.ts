import axios from 'axios';
import { LoginResponse } from '../interfaces';

const BASE_URL = 'http://15.164.68.133';
const HEADER = {
  headers: {'Content-Type' : 'application/json'},
}

const APIs = {
  login : (userId : string, password : string) => {
    const body = { userId, password };
    const result = axios.post<LoginResponse>(`${BASE_URL}/api/login`, body, HEADER).then(result => result.data);
    return result;
  }
}

export default APIs;