import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import announceService from "./announceService";

const initialState = {
  announcements: "",
  loading: false,
  error: null,
};

export const addAnnounce = createAsyncThunk(
  "admin/addannounce",
  async (announceData, thunkAPI) => {
    try {
      const response = await announceService.addAnnounce(announceData);
      return response;
    } catch (error) {
      const message =
        (error.response.data &&
          error.response.data.message &&
          error.response) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    resetannounce: (state) => {
      state.announcements = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAnnounce.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addAnnounce.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(addAnnounce.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetannounce } = announcementSlice.actions;
export default announcementSlice.reducer;
