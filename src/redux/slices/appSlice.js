import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const appSlice = createSlice({
   name: "appData",
   initialState,
   reducers: {
      toggleSidePanel: (state, action) => {
         const sidePanelID = `${action.payload.id}SidePanel`;
         state[sidePanelID] = action.payload.action !== undefined ? action.payload.action : state[sidePanelID] ? false : true;
      },
   },
});

export const { toggleSidePanel } = appSlice.actions;

export default appSlice.reducer;