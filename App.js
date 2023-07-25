import { useFonts } from "expo-font";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Josefin: require("./src/assets/Jossefin_Sans/JosefinSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
