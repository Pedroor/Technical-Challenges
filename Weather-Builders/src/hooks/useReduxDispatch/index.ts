import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/types";

export const useReduxDispatch = () => useDispatch<AppDispatch>();
