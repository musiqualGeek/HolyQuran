import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import { store } from "./app/redux/createStore";
import { Provider } from "react-redux";
import Main from "./app/screens/Main";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
