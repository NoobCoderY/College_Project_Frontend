import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  filters: {},
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      if (action.payload.type === "add") {
        if (action.payload.title === "price") {
          state.filters[action.payload.title] = action.payload.value;
        } else {
          if (state.filters[action.payload.title]) {
            state.filters[action.payload.title] = [
              ...state.filters[action.payload.title],
              action.payload.value,
            ];
          } else {
            state.filters[action.payload.title] = [action.payload.value];
          }
        }
      } else if (action.payload.type === "remove") {
        let data = state.filters[action.payload.title];
        if (data || data.length > 0) {
          data = data.filter((el) => el !== action.payload.value);
          state.filters[action.payload.title] = data;
        }
      }
    },
    removeFilters(state, action) {

        if(action.payload.type==="price"){
            state.filters['price']="";
        }else{

            let data = state.filters[action.payload.type];
            data = data.filter((el) => el !== action.payload.value);
            state.filters[action.payload.type] = data;
        }
    },
    clearFilters(state) {
      for(let key in state.filters){
        state.filters[key]=[]
      }
      // state.filters = {};
    }
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
