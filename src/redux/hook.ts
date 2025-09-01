
import { Root } from "react-dom/client";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";


export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch= useDispatch.withTypes<AppDispatch>()