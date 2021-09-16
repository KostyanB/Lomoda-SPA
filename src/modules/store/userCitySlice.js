import { createSlice } from "@reduxjs/toolkit";

export const userCitySlice = createSlice({
    name: 'userCity',
    initialState: {
        userCity: 'Ваш город?'
    },
    reducers: {
        setUserCity: (state, data) => {
            state.userCity = data.payload;
        },
        promptCity: (state) => {
            const newCity = prompt('Укажите Ваш город');
            if (newCity) {
                localStorage.setItem('lomoda-location', newCity);
                state.userCity = newCity;
            }
        }
    }
});

export const { setUserCity, promptCity } = userCitySlice.actions;
export const selectUserCity = state => state.userCity.userCity;

export default userCitySlice.reducer;