import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

const userSlice = createSlice({
  name: "company",
  initialState: {
    _id: "",
    email: "",
    address: "",
    superUser: false,
    city: "",
    name: "",
    phone: "",
    worker: "",
    zipCode: "",
    nextOrderNumber: 0,
    nextOrderYear: 0,
  },
  reducers: {
    setData(state, action) {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.superUser = action.payload.superUser;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.worker = action.payload.worker;
      state.zipCode = action.payload.zipCode;
      state.nextOrderNumber = action.payload.nextOrderNumber;
      state.nextOrderYear = action.payload.nextOrderYear;
    },
    setOrderNumber(state) {
      state.nextOrderNumber = state.nextOrderNumber + 1;
    },
  },
});

export const userActions = userSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
});
