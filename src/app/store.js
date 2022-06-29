import { configureStore } from "@reduxjs/toolkit";
import announcementReducer from "../features/announceSlice";

export const store = configureStore({
  reducer: {
    announcements: announcementReducer,
  },
});
