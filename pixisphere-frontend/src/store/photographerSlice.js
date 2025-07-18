import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchPhotographers = createAsyncThunk("photographers/fetchPhotographers", async (category, {rejectWithValue}) => {
    try {
        const cached = localStorage.getItem(category);
        if(cached) {
            return JSON.parse(cached);
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${category}`);

        if(!res.ok) {
            return rejectWithValue(`Error: ${res.status}`);
        }

        const data = await res.json();
        localStorage.setItem(category, JSON.stringify(data));

        return data;
    } catch (error) {
        return rejectWithValue(`Error: ${error?.message || 'Unknown error'}`);
    }
})

const photographerSlice = createSlice({
    name: "photographer",
    initialState: {
        category: "",
        maternity: [],
        wedding: [],
        loading: false,
        error: null,
    },
    reducers: {
        addPhotographerCategory: (state, action) => {
            state.category = action.payload
        }
    }, 

    extraReducers: builder => {
        builder
        .addCase(fetchPhotographers.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPhotographers.fulfilled, (state, action) => {
            state.loading = false;
            const category = action.meta.arg;
            state[category] = action.payload;
        })
        .addCase(fetchPhotographers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        })
    }
})

export default photographerSlice.reducer;