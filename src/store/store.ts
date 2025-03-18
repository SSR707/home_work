import { configureStore } from "@reduxjs/toolkit";
import LikeReducer from "./slices/like-reducer";
import { loadState, saveState } from "@/utils/config/storage";
import { subscribe } from "diagnostics_channel";

export const store = configureStore({
  reducer: {
    like: LikeReducer,
  },
  preloadedState: {
    like: loadState("like"),
  },
});

store.subscribe(() => {
  saveState("like", store.getState()?.like);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
