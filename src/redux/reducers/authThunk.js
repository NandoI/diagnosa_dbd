import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from './authSlice';
import { API_URL } from '../../../conn';

export const registerUser = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axios.post(`${API_URL}users/regis`, userData);
  
      // Ambil data userId dari respons
      const { id, nama, email } = response.data.user;
  
      // Simpan userId ke localStorage untuk digunakan pada form pasien
      localStorage.setItem('userId', id);
  
      // Dispatch sukses dengan data user
      dispatch(registerSuccess(response.data));
  
      return response.data; // Mengembalikan data ke komponen jika diperlukan
    } catch (error) {
      dispatch(registerFailure(error.message));
      throw error; // Mengembalikan error ke komponen
    }
  };

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_URL}users/login`, credentials);
    const { user, token } = response.data; // Data user dan token dari respons API
    dispatch(loginSuccess({ user, token }));
    localStorage.setItem('token', token); // Menyimpan token di localStorage
    return user;
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error; // Mengembalikan error ke komponen
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logout());
};
