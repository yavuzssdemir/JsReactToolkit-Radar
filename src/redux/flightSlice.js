import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })

      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Uçuş verilerini alırken bir hata oluştu";
      });
  },
});

export default flightSlice.reducer;
