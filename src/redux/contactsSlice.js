import { createSlice } from '@reduxjs/toolkit';
import { fetchContackts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extrareducers: {
    [fetchContackts.pending](state) {
      state.isLoading = true;
    },
    [fetchContackts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContackts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addContacts, deleteContact, filterContacts } =
//   contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
