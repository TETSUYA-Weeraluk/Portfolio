import countrySlice from "./Country-slice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : {
        country : countrySlice.reducer
    }
});

export default store;