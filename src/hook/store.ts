import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/index";

/**
 * Export functions that are type aware of the state
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//? This allows you to use the type aware functions in your components
//? import { useAppDispatch, useAppSelector } from '@store/hooks'
//? const {...} = useAppSelector((state) => state.user)
//? const dispatch = useAppDispatch()
