import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface ICursor {
  color: string;
  isHoveringHeader: boolean;
  isHeaderOpened: boolean;
}
const initialState: ICursor = {
  color: "",
  isHoveringHeader: false,
  isHeaderOpened: false,
};

export const cursorSlice = createSlice({
  name: "cursor-slice",
  initialState,
  reducers: {
    updateCursor(state, action) {
      state.color = action.payload.isHeaderOpened ? "#f7eee2" : "#132821";
      state.isHoveringHeader = action.payload.isHoveringHeader;
      state.isHeaderOpened = action.payload.isHeaderOpened;
    },
  },
});
export const { updateCursor } = cursorSlice.actions;
export default cursorSlice.reducer;
