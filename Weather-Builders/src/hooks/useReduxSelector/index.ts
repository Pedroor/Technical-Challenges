import { useSelector, TypedUseSelectorHook } from "react-redux";
import { ReduxStore } from "../../redux/store/types";

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
