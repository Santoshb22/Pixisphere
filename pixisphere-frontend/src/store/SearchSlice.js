const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: null,
  },
  reducers: {
    addSearchData: (state, action) => {
      state.searchData = action.payload;
    },

    removeSearchedData: (state) => {
      state.searchData = null;
    }
  }
})

export const { addSearchData, removeSearchedData } = searchSlice.actions;

export default searchSlice.reducer;
