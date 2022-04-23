import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native";
import { store } from './app/redux/createStore'
import { Provider } from 'react-redux';
import Main from './app/screens/Main'

const App = () => { 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Main />
    </Provider>
  </SafeAreaView>
  );
};

export default App;
