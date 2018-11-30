import axios from 'axios';
import { SET_USER_PROFILE } from './types';

const setUserProfile = (data) => ({
    type: SET_USER_PROFILE,
    payload: data
});

export const fetchUserProfile = () => {
    return async (dispatch, getState) => {
        try {
            const url = 'http://api.myjson.com/bins/17eyds';
            const response = await axios.get(url);
            dispatch(setUserProfile(response.data));    
        } catch (error) {
            console.log(error.response);
        }
    };
};