import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActive: {},
  userAppointments: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.userActive = action.payload;
    },
    setAppointmentByUserId: (state, action) => {
      state.userAppointments = action.payload;
    },
    cancelAppointmentUser: (state, action) => {
      state.userAppointments = state.userAppointments.map((appointment) => {
        if (appointment.id === action.payload) {
          return {
            ...appointment,
            status: "cancelled",
          };
        }
        return appointment;
      });
    },
    setUserAppointment: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const {
  setUser,
  setAppointmentByUserId,
  cancelAppointmentUser,
  setUserAppointment,
} = userSlice.actions;
