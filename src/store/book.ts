import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
// import { RoomState } from "../types/reduxState";
// import { RoomType } from "../types/room";

//* 초기 상태
// const initialState: RoomState = {
// rooms: [],
// detail: null,
// };

const room = createSlice({
  name: "roomReducer",
  initialState: [],
  reducers: {
    // add: (state, action: PayloadAction<RoomType[]>) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
    // remove: (state, action) => state.filter(rooms => rooms.id !== action.payload)
  }
})

//* 타입 지원되는 커스텀 useSelector 만들기
export const useSelector: TypedUseSelectorHook<any> = useReduxSelector;

//room.reducer => reducer
const store = configureStore({ reducer: room.reducer });

//room.action => action
// export const { add, remove } = room.actions;

export default store;