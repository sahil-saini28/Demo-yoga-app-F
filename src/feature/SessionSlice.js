import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getallsessions = createAsyncThunk(
  "getallsession",
  async (_, { rejectWithValue }) => {
    // Removed the unused 'data' parameter
    try {
      const response = await fetch("http://localhost:4000/yoga-classes", {
        method: "GET", // Specify the request method as GET
      });

      if (!response.ok) {
        // If the response is not successful (e.g., 404, 500, etc.), throw an error
        throw new Error("Failed to fetch yoga classes");
      }

      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const sessionfindbyid = createAsyncThunk(
  "createdepartment",
  async (data, { rejectWithValue }) => {
    
    const response = await fetch(
      "http://localhost:4000/yoga-classes/get-by-id",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: data }),
      }
    );

    try {
      const sessiondetail = await response.json();
      
      return sessiondetail;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// sessionfindbyid
const initialState = {
  val: 0,
  value: 9,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.val += 1;
    },
    decrement: (state) => {
      state.val -= 1;
    },
    incrementByAmount: (state, action) => {
      state.val += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getallsessions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallsessions.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getallsessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }) .addCase(sessionfindbyid.pending, (state) => {
        state.loading = true;
      })
      .addCase(sessionfindbyid.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(sessionfindbyid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = sessionSlice.actions;

export default sessionSlice.reducer;
