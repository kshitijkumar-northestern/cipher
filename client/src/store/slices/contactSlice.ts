import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ContactState { status: 'idle' | 'loading' | 'succeeded' | 'failed'; error: string | null; message: string | null; }
const initialState: ContactState = { status: 'idle', error: null, message: null };

export const submitContactForm = createAsyncThunk('contact/submit', async (data: Record<string, string>, { rejectWithValue }) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api'}/contact`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) return rejectWithValue(json.error || 'Failed');
    return json;
  } catch { return rejectWithValue('Network error'); }
});

const contactSlice = createSlice({
  name: 'contact', initialState,
  reducers: { resetContact: () => initialState },
  extraReducers: (b) => {
    b.addCase(submitContactForm.pending, (s) => { s.status = 'loading'; s.error = null; });
    b.addCase(submitContactForm.fulfilled, (s, a) => { s.status = 'succeeded'; s.message = a.payload.message; });
    b.addCase(submitContactForm.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload as string; });
  },
});

export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;
