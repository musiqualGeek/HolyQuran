import React from "react";
import "react-native-gesture-handler";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import Main from "./app/screens/Main";
import { store } from "./app/redux/createStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#496F51"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={true}
      />
      <Provider store={store}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Main />
        </KeyboardAvoidingView>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
