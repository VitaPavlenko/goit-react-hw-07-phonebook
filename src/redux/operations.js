import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsApi,
  getContactsApi,
  removeContactsApi,
} from '../utils/mockApi';

export const addContact = createAsyncThunk(
  'items/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const newContact = await addContactsApi(contact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getContact = createAsyncThunk('items/get', async (_, thunkApi) => {
  try {
    const contacts = await getContactsApi();
    return contacts;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeContact = createAsyncThunk(
  'items/remove',
  async (id, thunkApi) => {
    try {
      await removeContactsApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
