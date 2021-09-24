import { createSlice } from "@reduxjs/toolkit";
import { initialStates } from './initialStates';
import { setLocationStorage } from '../Functions/handleStorage';

export const userCitySlice = createSlice({
    name: 'userCity',
    initialState: {
        userCity: initialStates.initUserCity
    },
    reducers: {
        setUserCity: (state, data) => {
            state.userCity = data.payload;
        },
        promptCity: (state) => {
            const newCity = prompt('Укажите Ваш город');
            if (newCity) {
                setLocationStorage(newCity);
                state.userCity = newCity;
            }
        }
    }
});

export const { setUserCity, promptCity } = userCitySlice.actions;
export const selectUserCity = state => state.userCity.userCity;

export default userCitySlice.reducer;