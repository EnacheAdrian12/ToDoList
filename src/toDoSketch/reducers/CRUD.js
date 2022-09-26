import { createSlice } from "@reduxjs/toolkit";

export const CRUD = createSlice({
  name: "CRUD",
  initialState: {
    list: [
      { name: "CRUD Principles" },
      { name: "TailWind CSS" },
      { name: "React" },
    ],
  },
  reducers: {
    delete_item: (state, action) => {
      const id = action.payload;
      state.list.splice(id, 1);
    },

    add: (state, action) => {
      const item = action.payload;
      state.list.push({ name: item });
    },
    delete_all: (state) => {
      state.list = [];
    },
  },
});

export const { delete_item, add, delete_all } = CRUD.actions;
export default CRUD.reducer;
