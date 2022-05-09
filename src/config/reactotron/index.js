import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure().useReactNative().use(reactotronRedux()).connect();

console.tron = Reactotron;

export default Reactotron;
