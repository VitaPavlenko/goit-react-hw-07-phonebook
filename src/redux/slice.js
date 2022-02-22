import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContact, removeContact } from './operations';

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     addContact: (state, action) => [...state, action.payload],
//     deleteContact: (state, action) =>
//       state.filter(contact => contact.id !== action.payload),
//   },
// });

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    handleFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
  extraReducers: {
    [addContact.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
      isLoading: false,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [getContact.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      isLoading: false,
    }),
    [getContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

    [removeContact.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },

    [removeContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload);

      // const idx = state.items.findIndex(contact => contact.id === payload.id);
      // state.items.splice(idx, 1);
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     handleFilter: (_, action) => action.payload,
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
export const { handleFilter } = contactsSlice.actions;

// const contactsReducer = combineReducers({
//   [contactsSlice.name]: contactsSlice.reducer,
//   [filterSlice.name]: filterSlice.reducer,
// });

// export default contactsReducer;

export default contactsSlice.reducer;
