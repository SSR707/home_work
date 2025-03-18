import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ILikeData {
  id: number;
}
interface LikeState {
  like: ILikeData[];
}

const initialState: LikeState = {
  like: [],
};
export const LikeReducer = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<ILikeData>) => {
      state.like.push(action.payload);
    },
    removeLike: (state, action: PayloadAction<number>) => {
      state.like = state.like.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addLike, removeLike } = LikeReducer.actions;
export default LikeReducer.reducer;
